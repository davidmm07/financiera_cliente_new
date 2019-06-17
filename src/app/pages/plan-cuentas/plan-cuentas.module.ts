import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanCuentasRoutingModule, routedComponents } from './plan-cuentas-routing.module';
import { GestionPlanCuentasComponent } from './gestion-plan-cuentas/gestion-plan-cuentas.component';
import { NbSelectModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { RubrosComponent } from './rubros/rubros.component';
import { ApropiacionesComponent } from './apropiaciones/apropiaciones.component';


@NgModule({
  declarations: [
    ...routedComponents,
    GestionPlanCuentasComponent,
    RubrosComponent,
    ApropiacionesComponent,
  ],
  imports: [
    CommonModule,
    PlanCuentasRoutingModule,
    NbSelectModule,
    ThemeModule,
  ]
})
export class PlanCuentasModule { }
