import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlobalStateService } from '../global-state.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input("isWide") isWide: boolean = false;
  @Input("hasTransparentBorder") hasTransparentBorder: boolean = false;
  @Input("hasCaret") hasCaret: boolean = false;
  @Output("onClick") click = new EventEmitter();

  constructor(public globalState: GlobalStateService){

  }

  onClick(){
    this.click.emit();
  }
}
