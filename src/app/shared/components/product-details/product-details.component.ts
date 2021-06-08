import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/modules/product/product.service';
import { Products } from '../../models/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

  productId: string = '';
  product: Products;
  productRoutes: any = [];
  sizeSelected: string | undefined;

  constructor(private route: ActivatedRoute,
    private productService: ProductService) {
      this.product = {
        id: '',
        name: '',
        category: '',
        type: '',
        description: '',
        instruction: '',
        maxParcel: 0,
        price: 0,
        images: [],
        menu: {},
        size: []
      }
      
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.productId = paramMap.get('productId') || '';
    })

    this.productService.fetchById(this.productId)
      .subscribe(product => {
        this.product = product;
        Object.keys(product.menu).forEach((key, index) => {
          if (key == 'id')
            return;

          this.productRoutes.push(
            {
              router: Object.values(product.menu).slice(1, index + 1).join('/').toLowerCase(),
              name: product.menu[key]
            }
          )
        });
        this.route.queryParamMap.subscribe(params => {
          if(this.product.size.find((item: any) => item.size == params.get('size') && item.available))
            this.sizeSelected = params.get('size') || undefined;
        });
      }
    );

  }
}
