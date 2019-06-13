import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanCuentasRoutingModule, routedComponents } from './plan-cuentas-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ComprobacionApropiacionInicialComponent } from './comprobacion-apropiacion-inicial/comprobacion-apropiacion-inicial.component';
import { ArbolComponent } from './arbol/arbol.component';
import { GestionPlanCuentasComponent } from './gestion-plan-cuentas/gestion-plan-cuentas.component';


@NgModule({
  declarations: [
    ...routedComponents,
    GestionPlanCuentasComponent,
  ],
  imports: [
    CommonModule,
    PlanCuentasRoutingModule
  ]
})
export class PlanCuentasModule { }
