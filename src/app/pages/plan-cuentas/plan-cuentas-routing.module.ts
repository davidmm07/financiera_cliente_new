import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArbolComponent, FsIconAComponent} from './arbol/arbol.component';
import { ComprobacionApropiacionInicialComponent } from './comprobacion-apropiacion-inicial/comprobacion-apropiacion-inicial.component';
import { GestionPlanCuentasComponent } from './gestion-plan-cuentas/gestion-plan-cuentas.component';
import { RubrosComponent } from './rubros/rubros.component';
import { ApropiacionesComponent } from './apropiaciones/apropiaciones.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FuentesComponent } from './fuentes/fuentes.component';
import { ModificacionFuentesComponent } from './fuentes/modificacion-fuentes/modificacion-fuentes.component';
import { GestionModificacionesComponent } from './gestion-modificaciones/gestion-modificaciones.component';
import { ProductosComponent } from './productos/productos.component';
import { TablaCrudComponent } from './tabla-crud/tabla-crud.component';
import { SmartTableDatepickerComponent , SmartTableDatepickerRenderComponent } from './tabla-crud/smart-table-datepicker/smart-table-datepicker.component'


const routes: Routes = [{
  path: 'arbol',
  component: ArbolComponent,
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
{
  path: 'fuentes',
  component: FuentesComponent,
},
{
  path: 'nb-fs-icon',
  component: FsIconAComponent,
},
{
  path: 'modificacion-fuentes',
  component: ModificacionFuentesComponent,
},
{
  path: 'gestion-modificaciones',
  component: GestionModificacionesComponent,
},
{
  path: 'productos',
  component: ProductosComponent,
},
{
  path: 'tabla-crud',
  component: TablaCrudComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  entryComponents: [SmartTableDatepickerComponent , SmartTableDatepickerRenderComponent],
})
export class PlanCuentasRoutingModule { }

export const routedComponents = [
  ArbolComponent,
  GestionPlanCuentasComponent,
  RubrosComponent,
  ApropiacionesComponent,
  FuentesComponent,
  ComprobacionApropiacionInicialComponent,
  FsIconAComponent,
  ConsultaComponent,
  FuentesComponent,
  ModificacionFuentesComponent,
  GestionModificacionesComponent,
  ProductosComponent,
  TablaCrudComponent,
  SmartTableDatepickerComponent,
  SmartTableDatepickerRenderComponent,
];
