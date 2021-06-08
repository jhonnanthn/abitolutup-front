import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { ServicesComponent } from './modules/services/services.component';
import { FontAwesomeModule,  } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatSliderModule } from '@angular/material/slider';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RequestApi } from './http-interceptor/http-request.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,

    NgbModule,
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
    RequestApi,
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
