import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../models/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

  productId: string = '';
  product!: Products;
  productRoutes!: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productRoutes = [];

    this.product = 
    {
      id: 'f1194c9e-dccd-4c52-81a2-8fa0d2c01338',
      category: 'moletom',
      router: 'trends/blusas/moletom',
      size: '',
      sizeOptions: [
        {
          size: 'P',
          available: false
        },
        {
          size: 'M',
          available: true
        },
        {
          size: 'G',
          available: true
        },
        {
          size: 'GG',
          available: false
        }
      ],
      name: 'Blazer Piquet - Branco',
      price: 1254.5,
      lastPrice: 1599.99,
      type: 'social',
      images: [
        'http://bestjquery.com/tutorial/product-grid/demo4/images/img-1.jpg',
        'http://bestjquery.com/tutorial/product-grid/demo4/images/img-2.jpg'
      ],
      maxParcel: 3,
      isWishlist: false,
      isSale: true,
      description: 'Tecido: Malha.<br>Composição: 100% Algodão',
      instruction: 'Instruções de Lavagem:<br>- Lave a mão com água em temperatura ambiente;'
    };

    this.product.router.split('/').forEach((router, index, array) => {
      this.productRoutes.push(
        {
          router: array.slice(0, index + 1).join('/'),
          name: router
        }
      )
      return router;
    });

    this.route.paramMap.subscribe(paramMap => {
      this.productId = paramMap.get('productId') || '';
    })
    this.route.queryParamMap.subscribe(params => {
      if(this.product.sizeOptions.find((item: any) => item.size == params.get('size') && item.available))
        this.product.size = params.get('size') || undefined;
    });
  }
}
