import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { ServicesComponent } from './modules/services/services.component';

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
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
