import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalStateService } from '../global-state.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public globalState: GlobalStateService){

  }
}
