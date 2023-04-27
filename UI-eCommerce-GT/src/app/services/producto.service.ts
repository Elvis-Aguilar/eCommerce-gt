import { Categoria } from './../../models/categoria';
import { Producto } from './../../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  readonly API_URL = 'http://localhost:3000/api/productos/';
  constructor(private httpClient: HttpClient) { }

  public getProductosCateg(categoria:Categoria): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.API_URL+'get-productos?categoria='+categoria.nombre)
  }

  public getImgProducto(url:String): Observable<Blob>{
    return this.httpClient.get(this.API_URL+'get-img-producto?url='+url, { responseType: 'blob'});
  }
  
  public saveImgProducto(formData: FormData): Observable<String>{
    return this.httpClient.post<String>(this.API_URL+'save-img-producto', formData);
  }

  public saveProducto(prodcuto:Producto): Observable<Producto>{
    return this.httpClient.post<Producto>(this.API_URL+'save-producto', prodcuto);
  }

  public getProductosUser(DPI:Number): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.API_URL+'get-producto-user?DPI='+DPI);
  }

  public aumetarCantidad(producto:Producto): Observable<Producto>{
    return this.httpClient.put<Producto>(this.API_URL+'umentar-cantidad',producto);
  }

}
