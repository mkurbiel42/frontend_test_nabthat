import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GlobalStateService } from '../global-state.service';

@Component({
  selector: 'app-edit-paragraph-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-paragraph-modal.component.html',
  styleUrl: './edit-paragraph-modal.component.scss'
})
export class EditParagraphModalComponent implements AfterViewInit{
  @ViewChild('editParagraphModal') modal!: ElementRef;
  public newText: string = "";
  
  constructor(public globalState: GlobalStateService){
  }

  ngAfterViewInit(): void {
    this.globalState.modalRef = this.modal;
  }

  closeModal(){
    this.modal.nativeElement.close();
  }

  addNewParagraph(text: string){
    this.globalState.addNewParagraph(text);
    this.newText = "";
  }
}
