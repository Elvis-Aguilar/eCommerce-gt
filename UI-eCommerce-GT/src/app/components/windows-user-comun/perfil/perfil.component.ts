import { SesionService } from './../../../services/sesion.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario!: Usuario;
  constructor(private sesion:SesionService) { }

  ngOnInit(): void {
    this.usuario = this.sesion.usuario
    this.sesion.mostrarHead=false
  }

}
