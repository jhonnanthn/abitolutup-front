import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/modules/product/product.service';
import { StorageService } from 'src/app/services/storage.service';
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
    private productService: ProductService,
    private storageService: StorageService) {
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

  cart(product: Products) {
    let cartBag = this.storageService.getData('bag');
    cartBag.push(product);
    this.storageService.setData('bag', cartBag);
  }

  wishes(product: Products) {
    let cartWishes = this.storageService.getData('wishes');
    cartWishes.push(product);
    this.storageService.setData('wishes', cartWishes);
  }
}
