import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApropiacionesRoutingModule, routedComponents } from './apropiaciones-routing.module';


@NgModule({
  declarations: [...routedComponents,],
  imports: [
    CommonModule,
    ApropiacionesRoutingModule
  ]
})
export class ApropiacionesModule { }
