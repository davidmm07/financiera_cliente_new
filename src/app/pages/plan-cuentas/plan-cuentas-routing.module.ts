import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArbolComponent } from './arbol/arbol.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { RegistroComponent } from './registro/registro.component';
import { ComprobacionApropiacionInicialComponent } from './comprobacion-apropiacion-inicial/comprobacion-apropiacion-inicial.component';


const routes: Routes = [{
  path: 'arbol',
  component: ArbolComponent,
},
{
  path: 'consulta',
  component: ConsultaComponent,
},
{
  path: 'registro',
  component: RegistroComponent,
},
{
  path: 'comprobacion-apropiacion-inicial',
  component: ComprobacionApropiacionInicialComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanCuentasRoutingModule { }

export const routedComponents = [
  ArbolComponent,
  ConsultaComponent,
  RegistroComponent,
  ComprobacionApropiacionInicialComponent
];