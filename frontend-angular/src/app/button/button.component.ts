import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

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
}
