import { CarritoCompraComponent } from './components/windows-user-comun/carrito-compra/carrito-compra.component';
import { WindowHomeComponent } from './components/windows-user-comun/window-home/window-home.component';
import { HomeProductosComponent } from './components/windows-user-comun/home-productos/home-productos.component';
import { AuthenticationService } from './services/authentication.service';
import { PerfilComponent } from './components/windows-user-comun/perfil/perfil.component';
import { RegistroComponent } from './components/windows-root/registro/registro.component';
import { LoginComponent } from './components/windows-root/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'area-comun/perfil',
    component: PerfilComponent,
    canActivate: [AuthenticationService]
  },
  {
    path: 'area-comun/home',
    component: WindowHomeComponent,
    canActivate: [AuthenticationService]
  },
  {
    path: 'area-comun/home/productos',
    component: HomeProductosComponent,
    canActivate: [AuthenticationService]
  },
  {
    path: 'area-comun/shopping-cart',
    component: CarritoCompraComponent,
    canActivate: [AuthenticationService]
  },
  {
    path: '**',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }