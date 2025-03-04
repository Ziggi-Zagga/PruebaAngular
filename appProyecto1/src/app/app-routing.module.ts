import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { DetallesProductoComponent } from './paginas/detalles-producto/detalles-producto.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'productos/:id', component: DetallesProductoComponent},
  {path: '**', redirectTo:'', pathMatch: "full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
