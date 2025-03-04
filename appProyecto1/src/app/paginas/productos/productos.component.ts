import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/modelos/producto.modelos';
import { ApiService } from 'src/app/servicios/api.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listaProductos: IProducto[]=[]

 constructor(private _api:ApiService){}

ngOnInit(): void {
  this._api.getProductos().subscribe((datos:IProducto[])=> {
  // console.log(datos)
  this.listaProductos = datos;
  })
}


}
