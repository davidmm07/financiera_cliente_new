import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { PlanCuentasRoutingModule, routedComponents } from './plan-cuentas-routing.module';
import { NbTreeGridModule, NbSelectModule } from '@nebular/theme';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    ThemeModule,
    SharedModule,
    CommonModule,
    PlanCuentasRoutingModule,
    NbTreeGridModule,
    NbSelectModule,
  ],
  exports: [

  ]
})
export class PlanCuentasModule { }
