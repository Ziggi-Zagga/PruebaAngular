import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {IProducto} from '../modelos/producto.modelos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string="http://localhost:5000/api/productos/";

  // private _http = inject(HttpClient)

  constructor(private _httpClient:HttpClient) { }

  /**
   * getProductos
 : Observable<>  */
  public getProductos(): Observable<IProducto[]> {
    return this._httpClient.get<IProducto[]>(this.url)
  }

  public getProducto(id: Number): Observable<IProducto>{

    return this._httpClient.get<IProducto>(this.url+`/${id}`)
  }

}
