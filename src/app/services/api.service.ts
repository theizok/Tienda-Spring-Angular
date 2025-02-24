import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "http://localhost:8080/api";
  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProductById(idProduct:number){
    return this.http.get(`${this.apiUrl}/products/${idProduct}`);
  }

  saveOrUpdateProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}/products`, product);
  }

  deleteProduct(idProduct:number){
    return this.http.delete(`${this.apiUrl}/products/${idProduct}`)
  }
}
