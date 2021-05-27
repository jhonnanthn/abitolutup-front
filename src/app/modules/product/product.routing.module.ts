import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailsComponent } from "src/app/shared/components/product-details/product-details.component";
import { ProductComponent } from "./product.component";

const ROUTES: Routes = [
    { path: '', component: ProductComponent, data: { title: 'Produtos' }},
    { path: ':category/:type', component: ProductComponent, loadChildren: () => import('./product.module').then(m => m.ProductModule), data: { title: 'Produtos' }},
    //{ path: ':productId', component: ProductDetailsComponent, loadChildren: () => import('../../shared/components/product-details/product-details.module').then(m => m.ProductDetailsModule), data: { title: 'Produtos' }},
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})

export class ProductRoutingModule { }