import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';
import { APP_SETTINGS} from '../app.settings';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private products: Product[] = [];
  private productsUrl = inject(APP_SETTINGS).apiUrl + '/products';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
      return this.httpClient.get<Product[]>(this.productsUrl)
        .pipe(map(products => {
          this.products = products;
          return products;
        }));
  }
}
