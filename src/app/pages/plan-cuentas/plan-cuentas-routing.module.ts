import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArbolComponent } from './arbol/arbol.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { RegistroComponent } from './registro/registro.component';
import { ComprobacionApropiacionInicialComponent } from './comprobacion-apropiacion-inicial/comprobacion-apropiacion-inicial.component';
import { GestionPlanCuentasComponent } from './gestion-plan-cuentas/gestion-plan-cuentas.component';
import { RubrosComponent } from './rubros/rubros.component';
import { ApropiacionesComponent } from './apropiaciones/apropiaciones.component';


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
{
  path: 'gestion-plan-cuentas',
  component: GestionPlanCuentasComponent,
},
{
  path: 'rubros',
  component: RubrosComponent,
},
{
  path: 'apropiaciones',
  component: ApropiacionesComponent,
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
  GestionPlanCuentasComponent,
  RubrosComponent,
  ApropiacionesComponent,
  ComprobacionApropiacionInicialComponent
];