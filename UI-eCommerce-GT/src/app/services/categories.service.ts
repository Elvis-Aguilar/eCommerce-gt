import { Categoria } from './../../models/categoria';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  readonly API_URL = 'http://localhost:3000/api/categorias/';
  constructor(private httpClient: HttpClient) { }

  public getCategories(): Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>(this.API_URL+'get-categorias')
  }

  public getImgCategoria(url:String): Observable<Blob>{
    return this.httpClient.get(this.API_URL+'get-img-categoria?url='+url, { responseType: 'blob'});
  }
}
