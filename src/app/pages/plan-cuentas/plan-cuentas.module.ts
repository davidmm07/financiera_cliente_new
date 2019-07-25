import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { PlanCuentasRoutingModule, routedComponents } from './plan-cuentas-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { 
  NbTreeGridModule, 
  NbSelectModule, 
  NbAlertModule, 
  NbTabsetModule, 
  NbStepperModule } from '@nebular/theme';





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
    NbAlertModule,
    NbTabsetModule,
    NbStepperModule,
  ],
  exports: [

  ],
})
export class PlanCuentasModule { }
