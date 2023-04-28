import { Router } from '@angular/router';
import { SesionService } from './../../../services/sesion.service';
import { UserService } from './../../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario';
import Swal from 'sweetalert2';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  loginForm!: FormGroup;
  myPattern = '^[0-9]{13}$';
  mostrarNavFooter= false
  rol="comun"
  tipoRol=1
  constructor(private formBuilder: FormBuilder,
    private userService:UserService,
    private sesion:SesionService,
    private router:Router) { }
  
  ngOnInit(): void {
    this.mostrarNavFooter=LoginComponent.autenticado
    if (this.mostrarNavFooter) {
      this.rol="Administrador"
      this.tipoRol=3
    }else{
      this.rol="comun"
      this.tipoRol=1
    }
    this.loginForm = this.formBuilder.group({
      nombre: [null, Validators.required],
      apellido:[null, Validators.required],
      DPI:[null, Validators.required],
      name_rol:[this.rol, Validators.required],
      tipo_rol:[this.tipoRol, Validators.required],
      password: [null, Validators.required],
    });
  }

  public registrar(){
    this.userService.saveUsuario(this.loginForm.value).subscribe(
      (value: Usuario) => {
        if (value.nombre === undefined) {
          Swal.fire(
            'Upss!!',
            'Ingresa correctamente Tus datos',
            'error'
          );
        }else{
         if (!this.mostrarNavFooter) {
          Swal.fire(
            'Bienvenido!!',
            'Bienvenido a Ecommerce-GT',
            'success'
          );
          this.sesion.usuario = value
          LoginComponent.autenticado= true
          this.router.navigate(['area-comun/perfil'])
         }else{
          Swal.fire(
            'Completado!!',
            'Usuario Creado con exito',
            'success'
          );
         }
        }
      },(error: any) => {}
    )
  }

  cambiarRol(rol:string, tipo:number){
    this.loginForm.value.name_rol=rol
    this.loginForm.value.tipo_rol=tipo
  }

}
