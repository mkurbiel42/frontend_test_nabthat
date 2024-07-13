import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [],
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss'
})
export class BlockComponent {
  @Input("headerText") headerText: string = "";
  @Input("mobileHeaderAlignmentClass") mobileHeaderAlignmentClass: string = "content-block__header--align-center";
}
