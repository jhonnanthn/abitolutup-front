import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductRoutingModule } from 'src/app/modules/product/product.routing.module';



@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ShopComponent],
  exports: [ShopComponent]
})
export class ShopModule { }
