import { Ganancia } from './../../models/ganancia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GananciaService {

  readonly API_URL = 'http://localhost:3000/api/ganancias/';
  constructor(private httpClient: HttpClient) { }

  public saveGanancia(ganancia:Ganancia): Observable<Ganancia>{
    return this.httpClient.post<Ganancia>(this.API_URL+'save-ganancia',ganancia)
  }
}
