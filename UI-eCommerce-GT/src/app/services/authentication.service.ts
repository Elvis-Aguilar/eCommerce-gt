import { LoginComponent } from './../components/windows-root/login/login.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (LoginComponent.autenticado) {
      return true;
    }else{
      this.router.navigate([""]);
      return false;
    }
   }
}
