import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { RubrosRoutingModule, routedComponents } from './rubros-routing.module';
import { NbTreeGridModule, NbSelectModule } from '@nebular/theme';
import { ArbolRubrosComponent } from './arbol-rubros/arbol-rubros.component';


@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    RubrosRoutingModule,
    NbTreeGridModule,
    NbSelectModule,
  ],
  exports: [
    ArbolRubrosComponent
  ]
})
export class RubrosModule { }
