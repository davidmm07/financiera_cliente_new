import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { ApropiacionesRoutingModule, routedComponents } from './apropiaciones-routing.module';
import { ArbolRubrosComponent } from '../rubros/arbol-rubros/arbol-rubros.component';
import { RubrosModule } from '../rubros/rubros.module';


@NgModule({
  declarations: [...routedComponents,],
  imports: [
    ThemeModule,
    CommonModule,
    ApropiacionesRoutingModule, 
    RubrosModule,
  ]
})
export class ApropiacionesModule { 
  validado = false;
}
