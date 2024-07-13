import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlockComponent } from "./block/block.component";
import { GlobalStateService } from './global-state.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShowModalButtonComponent } from "./show-modal-button/show-modal-button.component";
import { EditParagraphModalComponent } from "./edit-paragraph-modal/edit-paragraph-modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonComponent, HeaderComponent, FooterComponent, NavbarComponent, BlockComponent, FormsModule, ShowModalButtonComponent, EditParagraphModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  public globalState: GlobalStateService;

  constructor(globalState: GlobalStateService){
    this.globalState = globalState;
  }

  async ngOnInit() {
    this.globalState.rightBlockText = [(await this.globalState.getParagraphs())[0]];
  }
}
