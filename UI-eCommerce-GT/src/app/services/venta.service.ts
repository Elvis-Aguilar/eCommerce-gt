import { Venta } from './../../models/venta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  readonly API_URL = 'http://localhost:3000/api/ventas/';
  constructor(private httpClient: HttpClient) { }

  public saveVenta(venta:Venta): Observable<Venta>{
    return this.httpClient.post<Venta>(this.API_URL+'save-venta',venta)
  }
}
