import { Component, OnInit } from '@angular/core';
import { helloWorld } from 'src/libs/utils/function';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.page.html',
  styleUrls: ['./detail-event.page.scss'],
})
export class DetailEventPage implements OnInit {

  constructor() { }

  ngOnInit() {

    helloWorld();
  }

}
