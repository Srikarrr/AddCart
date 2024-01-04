import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 

  }
  getProduct(): Observable<any>{
    return this.http.get<any>("https://fakestoreapi.com/products").pipe(map((res: any) => {
      return res;
    }));
 }
}
