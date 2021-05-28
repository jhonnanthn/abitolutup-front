import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../models/products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {

  @Input()
  title: any;;

  @Input()
  products: Products[] | undefined;

  constructor(private route: ActivatedRoute) {
    this.title = this.route.snapshot.url[this.route.snapshot.url.length - 1];
  }

  ngOnInit(): void {
  }

  submitOrder (event: any) {

  }
}
