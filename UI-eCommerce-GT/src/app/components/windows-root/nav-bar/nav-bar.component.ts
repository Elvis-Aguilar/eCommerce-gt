import { SesionService } from 'src/app/services/sesion.service';
import { Router } from '@angular/router';
import { Usuario } from './../../../../models/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  usuario:Usuario = new Usuario();
  
  constructor(private router:Router,public sesion:SesionService) { }


  ngOnInit(): void {
  }

  goPerfil(){
    this.router.navigate(['area-comun/perfil'])

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


  

}
