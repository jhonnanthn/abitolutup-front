import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'src/app/shared/components/carousel/carousel.module';
import { HomeComponent } from './home.component';
import { ShopModule } from 'src/app/shared/components/shop/shop.module';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    ShopModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
})
export class HomeModule { }
