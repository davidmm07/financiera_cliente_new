import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';

import { RubrosRoutingModule, routedComponents } from './rubros-routing.module';
import { ArbolRubrosComponent } from './arbol-rubros/arbol-rubros.component';

@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    RubrosRoutingModule
  ]
})
export class RubrosModule { }
