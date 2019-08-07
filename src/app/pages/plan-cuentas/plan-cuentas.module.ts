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
  NbStepperModule,
  NbCheckboxModule } from '@nebular/theme';

import { ProductosRubroComponent } from './rubros/productos-rubro/productos-rubro.component';



import { Ng2SmartTableModule } from 'ng2-smart-table';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';




@NgModule({
  declarations: [
    ...routedComponents,
    ProductosRubroComponent,
  ],
  imports: [
    ThemeModule,
    SharedModule,
    CommonModule,
    PlanCuentasRoutingModule,
    NbTreeGridModule,
    NbSelectModule,
    NbAlertModule,
    NbCheckboxModule,
    NbTabsetModule,
    NbStepperModule,
    Ng2SmartTableModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  exports: [

  ],
})
export class PlanCuentasModule { }
