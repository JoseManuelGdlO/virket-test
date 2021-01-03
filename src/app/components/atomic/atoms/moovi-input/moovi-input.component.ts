import { Component, Input, OnInit } from '@angular/core';
import { MooviColors } from 'src/libs/utils/values';

@Component({
  selector: 'moovi-input',
  templateUrl: './moovi-input.component.html',
  styleUrls: ['./moovi-input.component.scss'],
})
export class MooviInputComponent implements OnInit {

  ICON_LEFT = 'left';

  // checkmark-circle-outline
  @Input() iconResource = 'checkmark-circle-outline';
  @Input() typeImage: 'icon' | 'asset' | '' = 'icon';
  @Input() whereIcon: 'left' | 'right' = 'right';

  @Input() titleIs: 'top' | 'bottom' = 'bottom';
  @Input() title = 'Escribe tu correo'
  @Input() sizeTitle = '16px';
  @Input() colorTitle = 'primary';

  rigthIcon = false;
  leftIcon = false;

  originalTitleColor: string;

  sizeInput = 12;

  color = new MooviColors();

  constructor() { }

  ngOnInit() {
    this.haveIcon();
    this.putColors();
    
  }

  putColors() {
    if(this.colorTitle) {
      this.originalTitleColor = this.color[this.colorTitle];
    } else {
      this.originalTitleColor = 'black';
    }
  }

  haveIcon() {
    
    if (this.iconResource.length != 0 && this.typeImage.length != 0) {
      this.sizeInput = 11;
      if (this.whereIcon == this.ICON_LEFT){
        this.leftIcon = true;
        this.rigthIcon = false;
      } else {
        this.leftIcon = false;
        this.rigthIcon = true;
      }
    }
    
  }

}
