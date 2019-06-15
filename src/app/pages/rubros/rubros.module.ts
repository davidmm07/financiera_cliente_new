import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { RubrosRoutingModule, routedComponents } from './rubros-routing.module';
import { NbTreeGridModule, NbToastrModule } from '@nebular/theme';
import { NbToast } from '@nebular/theme/components/toastr/model';

import { RubroHelper } from '../../helpers/rubros/rubroHelper';

@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    RubrosRoutingModule,
    NbTreeGridModule,
    NbToastrModule
  ]
})
export class RubrosModule { }
