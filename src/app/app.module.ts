import { CUSTOM_ELEMENTS_SCHEMA, DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { ServicesComponent } from './modules/services/services.component';
import { AboutComponent } from './modules/about/about.component';
import { FontAwesomeModule,  } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatSliderModule } from '@angular/material/slider';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSliderModule,
    MDBBootstrapModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ServicesComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
  ],
  bootstrap: [AppComponent],
  schemas: []
})

export class AppModule { 
}
