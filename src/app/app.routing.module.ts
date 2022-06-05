import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

 const rutas: Routes = [
     {path: 'datos-personales', component: DatosPersonalesComponent},
     {path: 'cotizacion', component: CotizacionComponent},
     {path: '', redirectTo: '/datos-personales', pathMatch: 'full'},
     {path: '**', component: NoEncontradoComponent}
 ]
@NgModule({
  declarations: [
  ],
  imports: [
      RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }