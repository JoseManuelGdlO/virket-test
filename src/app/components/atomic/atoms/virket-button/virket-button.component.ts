import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VirketColors } from 'src/libs/utils/values';

@Component({
  selector: 'virket-button',
  templateUrl: './virket-button.component.html',
  styleUrls: ['./virket-button.component.scss'],
})
export class VirketButtonComponent implements OnInit {

  // Add subtitle to button
  @Input() subtitle = '';
  // Add title to button
  @Input() title = 'Click!';
  // Select size text medium, short, large
  @Input() sizeText: 'short' | 'medium' | 'large' = 'medium';
  // turn off button
  @Input() isDisabled = false;
  // Change background color is necesary add color in Utils/values/VirketColors class
  @Input() backgorundColor = 'primary';
  // Is round button or not
  @Input() isFull = true;

  // call function when click button
  @Output() onClick = new EventEmitter<boolean>();

  sizeTitle: string;
  sizeSubTitle: string;
  putBackground: string;

  color = new VirketColors();

  constructor() { 
  }

  ngOnInit() {
    this.changeSize();
    this.putBackgroundColor();
  }

  putBackgroundColor() {
    this.putBackground = this.color[this.backgorundColor];
  }

  changeSize(){
    switch (this.sizeText) {
      case 'short':
        this.sizeTitle = '10px';
        this.sizeSubTitle = '5px';
        break;
      case 'medium':
        this.sizeTitle = '15px';
        this.sizeSubTitle = '10px';
        break;
      case 'large':
        this.sizeTitle = '20px';
        this.sizeSubTitle = '15px';
        break;
    }
  }

  click() {
    if (!this.isDisabled) {
      this.onClick.emit(true);
    }
  }

}