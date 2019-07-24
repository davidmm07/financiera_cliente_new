import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { PlanCuentasRoutingModule, routedComponents } from './plan-cuentas-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NbTreeGridModule, NbSelectModule, NbAlertModule, NbTabsetModule } from '@nebular/theme';
import { ProductosComponent } from './productos/productos.component';
import { TablaCrudComponent } from './tabla-crud/tabla-crud.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';




@NgModule({
  declarations: [
    ...routedComponents,
    ProductosComponent,
    TablaCrudComponent,
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
    Ng2SmartTableModule,
  ],
  exports: [

  ],
})
export class PlanCuentasModule { }
