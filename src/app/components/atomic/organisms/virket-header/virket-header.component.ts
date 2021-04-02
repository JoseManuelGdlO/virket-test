import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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

  constructor(
    public location: Location,
    public router: Router
  ) { }

  ngOnInit() {
    console.log(
    this.profileImage.length
    );
  }

  clickBack(){
    if(this.route) {
      this.router.navigateByUrl(this.route);
    } else {
      this.location.back();
    }
  }

}
