import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatSliderModule,
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
