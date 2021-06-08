import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/shared/models/products';
import { ProductService } from './product.service';

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
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    let parameters: any = {};

    this.route.params?.subscribe((param: any) => {
        Object.keys(param).forEach((key, index) => {
          parameters[key] = param[key]
        });
        this.route.data.subscribe((data: any) => parameters.page = data.page);
    });
    
    this.productService.fetchAll(parameters)
      .subscribe(results => this.products = results);

    this.route.params.subscribe(params => {
      this.category = params['category'] && params['category'].replace('-', ' ');
      this.type = params['type'] && params['type'].replace('-', ' ');
    });
  }

}
