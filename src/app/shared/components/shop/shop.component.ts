import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {

  @Input()
  title: string = 'Produtos';

  constructor() { }

  ngOnInit(): void {
  }

  submitOrder (event: any) {
    console.log(event);
  }
}
