import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { CurrencyFormatPipe } from '../../pipes/currency';
import { AppPipes } from '../../pipes';

@NgModule({
  imports: [
    CommonModule,
    //ProductRoutingModule
    AppPipes
  ],
  declarations: [
    ProductDetailsComponent,
  ],
  exports: [ProductDetailsComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
  ]
})
export class ProductDetailsModule { }
