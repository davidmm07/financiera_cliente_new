import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../@core/_guards/auth.guard';
import { ArbolRubrosComponent } from './arbol-rubros/arbol-rubros.component';

const routes: Routes = [{
    path: 'arbol-rubros',
    component: ArbolRubrosComponent,
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
  ArbolRubrosComponent,
];

