import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormatPipe } from './pipes/currency';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CurrencyFormatPipe,
  ],
  exports: [
    CurrencyFormatPipe,
  ]
})
export class AppPipes { }