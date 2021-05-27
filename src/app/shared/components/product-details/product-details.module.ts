import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from 'src/app/modules/product/product.routing.module';
import { ProductDetailsComponent } from './product-details.component';



@NgModule({
  imports: [
    CommonModule,
    //ProductRoutingModule
  ],
  declarations: [ProductDetailsComponent],
  exports: [ProductDetailsComponent]
})
export class ProductDetailsModule { }
