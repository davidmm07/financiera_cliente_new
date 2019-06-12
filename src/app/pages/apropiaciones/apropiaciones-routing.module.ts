import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaApropiacionesInicialesComponent } from './consulta-apropiaciones-iniciales/consulta-apropiaciones-iniciales.component';
import { RegistroApropiacionesInicialesComponent } from './registro-apropiaciones-iniciales/registro-apropiaciones-iniciales.component';

const routes: Routes = [{
  path: 'consulta-apropiaciones-iniciales',
  component: ConsultaApropiacionesInicialesComponent,
},
{
path: 'registro-apropiaciones-iniciales',
component: RegistroApropiacionesInicialesComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApropiacionesRoutingModule { }
export const routedComponents = [
  ConsultaApropiacionesInicialesComponent,
  RegistroApropiacionesInicialesComponent,
];