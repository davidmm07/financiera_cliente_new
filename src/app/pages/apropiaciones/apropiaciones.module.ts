import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { ApropiacionesRoutingModule, routedComponents } from './apropiaciones-routing.module';


@NgModule({
  declarations: [...routedComponents,],
  imports: [
    ThemeModule,
    CommonModule,
    ApropiacionesRoutingModule
  ]
})
export class ApropiacionesModule { 
  validado = false;
}
