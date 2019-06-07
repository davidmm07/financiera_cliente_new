import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../@core/_guards/auth.guard';
import { ConsultaRubrosComponent } from './consulta-rubros/consulta-rubros.component';


const routes: Routes = [{
    path: 'consulta-rubros',
    component: ConsultaRubrosComponent,
}];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class RubrosRoutingModule { }

export const routedComponents = [
  ConsultaRubrosComponent,
];

