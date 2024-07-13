import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { GlobalStateService } from '../global-state.service';
import { BottomMenuComponent } from "../bottom-menu/bottom-menu.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonComponent, BottomMenuComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public globalState: GlobalStateService){

  }

  changeBottomMenuState(){
    this.globalState.isBottomMenuShown = !this.globalState.isBottomMenuShown;
  }
}
