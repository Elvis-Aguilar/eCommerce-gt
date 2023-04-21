import { Categoria } from './../../../../models/categoria';
import { SesionService } from './../../../services/sesion.service';
import { CategoriesService } from './../../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-categoria',
  templateUrl: './card-categoria.component.html',
  styleUrls: ['./card-categoria.component.css']
})
export class CardCategoriaComponent implements OnInit {

  categoria:Categoria = new Categoria()
  imagen!: string;

  constructor(private categoriaServise:CategoriesService,
    private sesion:SesionService,
    private router:Router) { }

  ngOnInit(): void {
    this.categoria = this.sesion.categorias[this.sesion.iteradorCategoria]
    this.sesion.iteradorCategoria++;
    this.categoriaServise.getImgCategoria(this.categoria.img).subscribe(
      result => {
        this.createImageFromBlob(result);
      }
    )
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imagen = reader.result as string;
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }

  public goProductos(){
    this.sesion.categoriActual = this.categoria
    this.router.navigate(['area-comun/home/productos'])
  }

}
