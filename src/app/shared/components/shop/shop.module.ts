import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductRoutingModule } from 'src/app/modules/product/product.routing.module';
import { CurrencyFormatPipe } from '../../pipes/currency';
import { AppPipes } from '../../pipes';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    AppPipes
  ],
  declarations: [
    ShopComponent,
  ],
  providers: [],
  exports: [ShopComponent]
})
export class ShopModule { }
