import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApropiacionesRoutingModule, routedComponents } from './apropiaciones-routing.module';

// routedComponents of Module Apropiaciones
@NgModule({
  declarations: [...routedComponents,],
  imports: [
    CommonModule,
    ApropiacionesRoutingModule
  ]
})
export class ApropiacionesModule { }
