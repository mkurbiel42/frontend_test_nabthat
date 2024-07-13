import { Component } from '@angular/core';
import { GlobalStateService } from '../global-state.service';

@Component({
  selector: 'app-bottom-menu',
  standalone: true,
  imports: [],
  templateUrl: './bottom-menu.component.html',
  styleUrl: './bottom-menu.component.scss'
})
export class BottomMenuComponent {
  constructor(public globalState: GlobalStateService){
    
  }

  switchPersonalData(): void{
    this.globalState.isPersonalDataShown = !this.globalState.isPersonalDataShown;
  }
}
