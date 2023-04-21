import { Usuario } from './../../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly API_URL = 'http://localhost:3000/api/users/';
  constructor(private httpClient: HttpClient) { }

  public getUsuarioLogin(user:Usuario): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.API_URL+'user-sesion?DPI='+user.DPI+"&password="+user.password)
  }

  public saveUsuario(user:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.API_URL+'save-user',user)
  }


}
