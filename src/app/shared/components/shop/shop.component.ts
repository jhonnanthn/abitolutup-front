import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../models/products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {

  @Input()
  title: string = 'Produtos';

  @Input()
  products: Products[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  submitOrder (event: any) {
    console.log(event);
  }
}
