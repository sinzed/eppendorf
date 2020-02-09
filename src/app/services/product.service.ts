import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { resolve } from 'url';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productData: Object;
  constructor(private http: HttpClient) { 

  }
  loadData(): Promise <boolean> {
    return new Promise((resolve)=>{
      this.http.get('../assets/data.json')
      .subscribe(data => {
        this.productData = data;
        resolve(true);
      });
    });
  }
}
