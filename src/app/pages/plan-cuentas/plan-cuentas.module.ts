import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { PlanCuentasRoutingModule, routedComponents } from './plan-cuentas-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NbTreeGridModule, NbSelectModule, NbAlertModule } from '@nebular/theme';
import { FuentesComponent } from './fuentes/fuentes.component';



@NgModule({
  declarations: [
    ...routedComponents,
    FuentesComponent,
  ],
  imports: [
    ThemeModule,
    SharedModule,
    CommonModule,
    PlanCuentasRoutingModule,
    NbTreeGridModule,
    NbSelectModule,
    NbAlertModule,
  ],
  exports: [

  ]
})
export class PlanCuentasModule { }
