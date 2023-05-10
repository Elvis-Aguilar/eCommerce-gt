import { Observable } from 'rxjs';
import { Tarjeta } from './../../models/tarjeta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarjetaServiceService {

  readonly API_URL = 'http://localhost:3000/api/tarjeta/';
  constructor(private httpClient: HttpClient) { }

  public getTarjetasUser(DPI:number): Observable<Tarjeta[]>{
    return this.httpClient.get<Tarjeta[]>(this.API_URL+'get-tarjetas?DPI='+DPI)
  }

  public saveTarjeta(tarjeta:Tarjeta): Observable<Tarjeta>{
    return this.httpClient.post<Tarjeta>(this.API_URL+'save-tarjeta',tarjeta)
  }
}
