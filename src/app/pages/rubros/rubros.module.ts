import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RubrosRoutingModule, routedComponents } from './rubros-routing.module';
import { ArbolRubrosComponent } from './arbol-rubros/arbol-rubros.component';

@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    CommonModule,
    RubrosRoutingModule
  ]
})
export class RubrosModule { }
