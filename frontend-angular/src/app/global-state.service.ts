import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private paragraphs: any = [];

  public radioOption: number = -1;
  public randomIndex: number = -1;

  public isPersonalDataShown: boolean = false;
  public isBottomMenuShown: boolean = false;

  public rightBlockText: Array<string> = []
  
  constructor(private httpClient: HttpClient) {
  }

  public async getParagraphs(): Promise<Array<string>>{
    if (this.paragraphs.length != 0){
      return this.paragraphs;
    }
    
    this.paragraphs = localStorage.getItem("paragraphs");

    return new Promise((resolve, reject) => {
      this.httpClient.get("/paragraphs.json").subscribe(async (data) => {
        try{
          this.paragraphs = data;
          resolve(this.paragraphs)
        }catch{
          reject("Error fetching data")
        }
      })
    })
  }

  getNewRandomIndex(){
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
      this.rightBlockText = [...initialText, this.paragraphs[this.radioOption - 1]];
      this.rightBlockText.sort();
      return
    }

    this.getNewRandomIndex()
    this.rightBlockText = [...initialText, this.paragraphs[this.randomIndex]];
    this.rightBlockText.sort();
  }


  resetSettings(): void{
    this.randomIndex = -1;
    this.radioOption = -1;
    this.rightBlockText = [this.paragraphs[0]];
    this.isPersonalDataShown = false;
  }
}
