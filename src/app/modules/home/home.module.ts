import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'src/app/shared/components/carousel/carousel.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
})
export class HomeModule { }
