import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlockComponent } from "./block/block.component";
import { GlobalStateService } from './global-state.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, HeaderComponent, FooterComponent, NavbarComponent, BlockComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  public globalState: GlobalStateService;
  private paragraphs: Array<string> = []

  constructor(globalState: GlobalStateService){
    this.globalState = globalState;
  }

  async ngOnInit() {
    this.paragraphs = (await this.globalState.getParagraphs())
    this.globalState.rightBlockText = this.paragraphs[0];
  }


}
