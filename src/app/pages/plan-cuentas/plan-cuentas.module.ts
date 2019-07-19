import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { PlanCuentasRoutingModule, routedComponents } from './plan-cuentas-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NbTreeGridModule, NbSelectModule, NbAlertModule, NbTabsetModule } from '@nebular/theme';
import { FuentesComponent } from './fuentes/fuentes.component';
import { ModificacionFuentesComponent } from './fuentes/modificacion-fuentes/modificacion-fuentes.component';



@NgModule({
  declarations: [
    ...routedComponents,
    FuentesComponent,
    ModificacionFuentesComponent,
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
   
  ],
  exports: [

  ]
})
export class PlanCuentasModule { }
