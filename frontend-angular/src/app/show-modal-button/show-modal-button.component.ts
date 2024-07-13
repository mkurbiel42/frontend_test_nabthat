import { Component } from '@angular/core';
import { GlobalStateService } from '../global-state.service';

@Component({
  selector: 'app-show-modal-button',
  standalone: true,
  imports: [],
  templateUrl: './show-modal-button.component.html',
  styleUrl: './show-modal-button.component.scss'
})
export class ShowModalButtonComponent {
  constructor(public globalState: GlobalStateService){
    
  }
}
