import { Peticion } from './../../models/peticion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ganancia } from 'src/models/ganancia';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  readonly API_URL = 'http://localhost:3000/api/peticiones/';
  constructor(private httpClient: HttpClient) { }

  public savePeticion(peticion:Peticion): Observable<Peticion>{
    return this.httpClient.post<Peticion>(this.API_URL+'save-peticion',peticion)
  }

  public getPeticionesEnCuros(DPI:number): Observable<Peticion[]>{
    return this.httpClient.get<Peticion[]>(this.API_URL+'get-peticion-curso?DPI='+DPI)
  }

  public getPeticionesEnCurosAll(): Observable<Peticion[]>{
    return this.httpClient.get<Peticion[]>(this.API_URL+'get-peticion-curso-all')
  }

  public getPeticionesEntregados(DPI:number): Observable<Peticion[]>{
    return this.httpClient.get<Peticion[]>(this.API_URL+'get-peticion-entregados?DPI='+DPI)
  }

  public setEstado(peticion:Peticion): Observable<Peticion>{
    return this.httpClient.put<Peticion>(this.API_URL+'set-estado', peticion)
  }

  









}
