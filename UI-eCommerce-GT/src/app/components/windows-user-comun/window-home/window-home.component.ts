import { Categoria } from './../../../../models/categoria';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-window-home',
  templateUrl: './window-home.component.html',
  styleUrls: ['./window-home.component.css']
})
export class WindowHomeComponent implements OnInit {

  categorias:Categoria[]=[]
  constructor(private categoriaService:CategoriesService,
    private sesion:SesionService) { }

  ngOnInit(): void {
    this.sesion.mostrarHead = true
    this.categoriaService.getCategories().subscribe(
      (value: Categoria[]) =>{
        this.categorias=value
        this.sesion.categorias = this.categorias
        this.sesion.iteradorCategoria = 0
      },
      (error:any) =>{}
    );
  }

  

}
