import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'notificacion',
      loadChildren: './notificacion/notificacion.module#NotificacionModule',
    },
    {
      path: 'rubros',
      loadChildren: './rubros/rubros.module#RubrosModule',
    },
    {
      path: 'apropiaciones',
      loadChildren: './apropiaciones/apropiaciones.module#ApropiacionesModule',
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
