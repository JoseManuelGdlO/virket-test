import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'virket-header',
  templateUrl: './virket-header.component.html',
  styleUrls: ['./virket-header.component.scss'],
})
export class VirketHeaderComponent implements OnInit {

  @Input() title = '';
  @Input() hasBack = true;
  @Input() route = null;
  @Input() profileImage = '';
  @Input() icon = '';
  @Input() fontsize = '12px';
  @Input() iconSize = '22px';
  @Output() onIconClick = new EventEmitter();

  constructor(
    public location: Location,
    public router: Router
  ) { }

  ngOnInit() {
  }

  clickBack(){
    if(this.route) {      
      this.router.navigateByUrl(this.route);
    } else {
      this.location.back();
    }
  }

  clickIcon() {
    this.onIconClick.emit();
  }

}
