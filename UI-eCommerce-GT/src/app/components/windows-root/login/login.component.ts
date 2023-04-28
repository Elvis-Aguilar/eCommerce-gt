import { SesionService } from './../../../services/sesion.service';
import { Usuario } from './../../../../models/usuario';
import { UserService } from './../../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  static autenticado = false;
  loginForm!: FormGroup;
  myPattern = '^[0-9]{13}$';
  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private userSevice:UserService,
    private sesion:SesionService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      DPI: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
  public login() {
    this.userSevice.getUsuarioLogin(this.loginForm.value).subscribe(
      (user:Usuario)=> {
        console.log(user.nombre)
        this.loginForm.reset({
          cui: null,
          passworde: null,
        });
        if (user.nombre === undefined) {
          Swal.fire(
            'Upss!!',
            'Ingresa correctamente el usuario y la contraseña',
            'error'
          );
        }else{
          this.sesion.usuario=user
          this.goWorkArea(user)
        }
      },(erro: any) => {
        //pag errro
        console.log('peticion xd');
      }
    )
  }

  public goResigtro(){
    this.router.navigate(['registro'])
  }

  public goWorkArea(user:Usuario){
    switch (user.tipo_rol) {
      case 1:
        LoginComponent.autenticado= true
        this.router.navigate(['area-comun/home'])
        break;
      case 2:
        LoginComponent.autenticado= true
        this.router.navigate(['area-paqueteria/perfil'])
        break;

      case 3:
          LoginComponent.autenticado= true
          this.router.navigate(['area-administrativa/perfil'])
          break;
      default:
        break;
    }
  }

  

  public goWindowComun(){

  }
}
