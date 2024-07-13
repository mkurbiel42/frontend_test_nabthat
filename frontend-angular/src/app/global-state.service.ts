import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  public paragraphs: Array<string> = [];

  public radioOption: number = -1;
  public randomIndex: number = -1;

  public isPersonalDataShown: boolean = false;
  public isBottomMenuShown: boolean = false;

  public rightBlockText: Array<string> = []
  public modalRef!: ElementRef;
  
  constructor(private httpClient: HttpClient) {
  }

  public async getParagraphs(straightFromTheFile: boolean = false): Promise<Array<string>>{
    if (this.paragraphs.length != 0 && !straightFromTheFile){
      return this.paragraphs;
    }
    
    let localStorageData = localStorage.getItem("paragraphs");
    if(localStorageData && !straightFromTheFile){
      this.paragraphs = JSON.parse(localStorageData);
      return this.paragraphs;
    }

    return new Promise((resolve, reject) => {
      this.httpClient.get("/paragraphs.json").subscribe(async (data) => {
        try{
          this.paragraphs = data as Array<string>;
          localStorage.setItem("paragraphs", JSON.stringify(data))
          resolve(this.paragraphs)
        }catch{
          reject("Error fetching data")
        }
      })
    })
  }

  getNewRandomIndex(){
    if(this.paragraphs.length === 3){
      this.randomIndex = 2;
      return this.randomIndex;
    }

    let newRandomIndex = this.randomIndex
    while(newRandomIndex == this.randomIndex){
      newRandomIndex = Math.floor(Math.random() * (this.paragraphs.length - 2) + 2)
    }
    
    this.randomIndex = newRandomIndex;
    return this.randomIndex;
  }

  modifyTexts(mode: string): void{
    let initialText: Array<string> = mode == "swap" ? [] : this.rightBlockText;

    if(this.radioOption === -1){
      return
    }

    if(this.radioOption !== 0){
      if(mode == "swap" && this.rightBlockText[0] === this.paragraphs[this.radioOption - 1]){
        alert("Nie można zastąpić tekstu takim samym tekstem!")
      }

      this.rightBlockText = [...initialText, this.paragraphs[this.radioOption - 1]];
      this.rightBlockText.sort((a:string,b:string) => {
        return a.toUpperCase() < b.toUpperCase() ? -1 : 1;
      });
      return
    }

    if(this.paragraphs.length === 3 && mode == "swap" && this.paragraphs[2] === this.rightBlockText[0]){
      alert("Nie można wylosować nowego tekstu - tylko jedna opcja")
    }

    this.getNewRandomIndex()
    this.rightBlockText = [...initialText, this.paragraphs[this.randomIndex]];
    this.rightBlockText.sort();
  }

  async resetSettings(): Promise<void>{
    await this.getParagraphs(true);
    this.randomIndex = -1;
    this.radioOption = -1;
    this.rightBlockText = [this.paragraphs[0]];
    this.isPersonalDataShown = false;
  }

  openModal(){
    this.modalRef.nativeElement.showModal();
  }

  addNewParagraph(text: string){
    this.paragraphs = [...this.paragraphs, text];
    localStorage.setItem("paragraphs", JSON.stringify(this.paragraphs));
  }

  saveParagraph(text: string, id: number){
    this.paragraphs = this.paragraphs.map((elem: string, idx: number) => {
      if(id === idx){
        return text
      }else{
        return elem
      }
    })
    localStorage.setItem("paragraphs", JSON.stringify(this.paragraphs))
  }

  deleteParagraph(id: number){
    if(this.paragraphs.length === 3){
      alert("Nie można pozostawić mniej niż trzech opcji!");
      return
    }

    this.paragraphs = this.paragraphs.filter((elem: string, idx: number) => id !== idx)
    localStorage.setItem("paragraphs", JSON.stringify(this.paragraphs))
  }
}
