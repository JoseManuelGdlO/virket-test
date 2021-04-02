import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'virket-reating',
  templateUrl: './virket-reating.component.html',
  styleUrls: ['./virket-reating.component.scss'],
})
export class VirketReatingComponent implements OnInit {

  @Input() reating = 0;

  ratingArr = ['assets/icon/star_border.svg','assets/icon/star_border.svg','assets/icon/star_border.svg','assets/icon/star_border.svg','assets/icon/star_border.svg']

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < this.reating; i++){
      this.ratingArr[i] = 'assets/icon/star.svg'
    }

  }

}
