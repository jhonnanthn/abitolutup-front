import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing.module';
import { ShopModule } from 'src/app/shared/components/shop/shop.module';
import { ProductDetailsComponent } from 'src/app/shared/components/product-details/product-details.component';
import { ProductDetailsModule } from 'src/app/shared/components/product-details/product-details.module';

@NgModule({
  imports: [
    CommonModule,
    ProductDetailsModule,
    ProductRoutingModule,
    ShopModule
  ],
  declarations: [ProductComponent, ProductDetailsComponent],
  exports: [ProductComponent]
})

export class ProductModule { }