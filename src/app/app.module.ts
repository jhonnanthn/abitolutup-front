import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule,  } from '@fortawesome/angular-fontawesome';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { ServicesComponent } from './modules/services/services.component';

import { RequestApi } from './http-interceptor/http-request.service';
import { StorageService } from './services/storage.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSliderModule,
    NgbModule,
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
    StorageService,
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
