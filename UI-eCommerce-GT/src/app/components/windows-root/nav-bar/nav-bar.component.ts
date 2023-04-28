import { PeticionService } from './../../../services/peticion.service';
import { SesionService } from 'src/app/services/sesion.service';
import { Router } from '@angular/router';
import { Usuario } from './../../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Peticion } from 'src/models/peticion';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  usuario:Usuario = new Usuario();
  
  constructor(private router:Router,public sesion:SesionService) { }


  ngOnInit(): void {
    this.usuario = this.sesion.usuario
  }

  goPerfil(){
    if (this.usuario.tipo_rol === 1) {
      this.router.navigate(['area-comun/perfil'])
    }
    if (this.usuario.tipo_rol === 2) {
      this.router.navigate(['area-paqueteria/perfil'])
    }

  }

  goHomeCatego(){
    this.router.navigate(['area-comun/home'])
  }

  goHomeProductos(){
    this.router.navigate(['area-comun/home/productos'])
  }

  goShoppingCart(){
    this.router.navigate(['area-comun/shopping-cart'])
  }

  goMisVentas(){
    this.router.navigate(['area-comun/mis-ventas'])
  }

   goMisPeidos(){
    this.router.navigate(['area-comun/mis-pedidos'])
  }

  goGestionPedidos(){
    this.router.navigate(['area-paqueteria/gestion-pedidos'])
  }
  goGestionProdctos(){
    this.router.navigate(['area-paqueteria/gestion-productos'])
  }


  

}
