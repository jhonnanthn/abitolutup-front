import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductRoutingModule } from 'src/app/modules/product/product.routing.module';
import { AppPipes } from '../../pipes';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    AppPipes,
    OrderModule
  ],
  declarations: [
    ShopComponent,
  ],
  providers: [],
  exports: [ShopComponent]
})
export class ShopModule { }
