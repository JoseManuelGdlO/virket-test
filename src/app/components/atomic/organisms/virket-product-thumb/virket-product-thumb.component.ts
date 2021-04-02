import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'virket-product-thumb',
    templateUrl: './virket-product-thumb.component.html',
    styleUrls: ['./virket-product-thumb.component.scss'],
  })
  export class VirketProductThumbComponent implements OnInit {

    @Input() brand: string;
    @Input() name: string;
    @Input() productImage: string;
    @Input() total: string;
    @Input() rating: number;
    @Input() isFavorite = false;

    constructor(){}

    ngOnInit(): void {
      
    }
  }