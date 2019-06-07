import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { RubrosRoutingModule, routedComponents } from './rubros-routing.module';
import { DynamicFormModule } from 'ngx-dynamic-form';
import { ConsultaRubrosComponent } from './consulta-rubros/consulta-rubros.component';

@NgModule({
  declarations: [
    ...routedComponents,
    ConsultaRubrosComponent,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    RubrosRoutingModule,
    DynamicFormModule
  ]
})
export class RubrosModule { }
