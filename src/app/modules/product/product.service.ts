import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestApi } from 'src/app/http-interceptor/http-request.service';
import { Products } from 'src/app/shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = 'product';

  constructor(
    private request: RequestApi,
    private http: HttpClient
  ) {
  }

  getProducts(params?: Observable<Params>): Observable<Products[]> {
    return this.request.get<Products[]>(`${this.productUrl}`, params);
  }

  getProductById(id: string): Observable<Products> {
    return this.request.get<Products>(`${this.productUrl}/${id}`);
  }
}