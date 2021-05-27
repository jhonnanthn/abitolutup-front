import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/shared/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  productId: string = '';
  category: string = '';
  type: string = '';
  products: Products[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {
    
    this.products.push(
      {
        id: 'f1194c9e-dccd-4c52-81a2-8fa0d2c01338',
        category: 'moletom',
        isNew: true,
        isSale: false,
        length: ['P', 'M', 'G', 'GG'],
        name: 'Blazer Piquet - Branco',
        price: 125.5,
        type: 'social',
        images: [
          'http://bestjquery.com/tutorial/product-grid/demo4/images/img-1.jpg',
          'http://bestjquery.com/tutorial/product-grid/demo4/images/img-2.jpg'
        ]
      },
      {
        id: 'f1194c9e-dccd-4c52-81a2-8fa0d2c01332',
        category: 'moletom',
        isNew: false,
        isSale: false,
        length: ['P', 'M', 'G', 'GG'],
        name: 'Blazer Piquet - Branco',
        price: 125.5,
        lastPrice: 190.5,
        type: 'social',
        images: [
          'http://bestjquery.com/tutorial/product-grid/demo4/images/img-1.jpg',
          'http://bestjquery.com/tutorial/product-grid/demo4/images/img-2.jpg'
        ]
      }
    )
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
      this.category = params['category'];
      this.type = params['type'];
    });
  }

}
