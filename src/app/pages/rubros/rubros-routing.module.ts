import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../@core/_guards/auth.guard';
import { ConsultaRubrosComponent } from './consulta-rubros/consulta-rubros.component';
import { ArbolRubrosComponent , FsIconComponent} from './arbol-rubros/arbol-rubros.component';


const routes: Routes = [{
    path: 'consulta-rubros',
    component: ConsultaRubrosComponent,
},
{
  path: 'arbol-rubros',
  component: ArbolRubrosComponent,
},
{
  path: 'nb-fs-icon',
  component: FsIconComponent,
}
];


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
  ArbolRubrosComponent,
  FsIconComponent
];

