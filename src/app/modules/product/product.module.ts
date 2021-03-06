import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing.module';
import { ShopModule } from 'src/app/shared/components/shop/shop.module';
import { ProductDetailsModule } from 'src/app/shared/components/product-details/product-details.module';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    ProductDetailsModule,
    ProductRoutingModule,
    ShopModule,
  ],
  declarations: [
    ProductComponent,
  ],
  providers: [
    ProductService
  ],
  exports: [ProductComponent]
})

export class ProductModule { }