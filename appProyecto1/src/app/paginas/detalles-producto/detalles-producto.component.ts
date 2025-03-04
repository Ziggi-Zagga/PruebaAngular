import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from 'src/app/modelos/producto.modelos';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit, OnDestroy{
  
productoId:Number= 0;
producto?:IProducto

constructor(private _route:ActivatedRoute, private _api:ApiService){}

ngOnInit(): void {
  this._route.params.subscribe((parametroURL)=>{
  this.productoId = Number(parametroURL['id'])
 })  
 this._api.getProducto(this.productoId).subscribe((producto:IProducto)=>{
 this.producto=producto;
 })
}

ngOnDestroy(): void {
  
}

}
