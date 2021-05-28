import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { ProductComponent } from './modules/product/product.component';
import { ProductRoutingModule } from './modules/product/product.routing.module';
import { ServicesComponent } from './modules/services/services.component';
import { ProductDetailsComponent } from './shared/components/product-details/product-details.component';

/*
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), data: { title: 'Home' }},
  { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule), data: { title: 'Sobre' }},
  { path: 'services', loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule), data: { title: 'Serviços' }},
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule), data: { title: 'Contato' }},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];*/

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), data: { title: 'Home' } },
  { path: 'about', component: AboutComponent,  loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule), data: { title: 'Sobre' } },
  { path: 'services', component: ServicesComponent, loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule), data: { title: 'Serviços' }},
  { path: 'contact', component: ContactComponent, loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule), data: { title: 'Contato' }},

  { path: 'trends', component: ProductComponent, data: { title: 'Produtos' }},
  { path: 'trends/:category', component: ProductComponent, data: { title: 'Produtos' }},
  { path: 'trends/:category/:type', component: ProductComponent, data: { title: 'Produtos' }},
  { path: 'produto/:productId', component: ProductDetailsComponent, data: { title: 'Produtos' }},

  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
