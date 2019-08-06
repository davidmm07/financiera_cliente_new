import { Component, OnInit, ViewChild } from '@angular/core';
import { FORM_INFO_FUENTE } from './form_info_fuente';
import { TranslateService } from '@ngx-translate/core';
import { Rubro } from '../../../@core/data/models/rubro';
import { FuenteFinanciamiento } from '../../../@core/data/models/fuente_financiamiento';
import { DependenciaHelper } from '../../../helpers/oikos/dependenciaHelper';
import { NbStepperComponent } from '@nebular/theme/components/stepper/stepper.component';
import { map } from 'rxjs/operators';
import { PopUpManager } from '../../../managers/popUpManager';

@Component({
  selector: 'ngx-fuentes',
  templateUrl: './fuentes.component.html',
  styleUrls: ['./fuentes.component.scss']
})
export class FuentesComponent implements OnInit {
  formInfoFuente: any;
  rubroSeleccionado: any;
  optionView: string;
  info_fuente: FuenteFinanciamiento;
  clean = false;
  rubrosAsignados: any = [];
  dependencias: any = [];
  dependenciasAsociadas: any = {};
  dependenciasAsignadas: any;
  dependenciaSeleccionada: any = [];
  entrarEditar: boolean;
  totalPermitido: boolean;
  entrarAddProductos: boolean;
  rubrosAsociados: any = {};
  @ViewChild('steep') steep: NbStepperComponent;

  constructor(
    private translate: TranslateService,
    private dependenciaHelper: DependenciaHelper,
    private popManager: PopUpManager,
  ) {
    this.entrarEditar = false;
    this.totalPermitido = true;
    this.entrarAddProductos = false;
    this.optionView = 'Apropiaciones';
    this.formInfoFuente = FORM_INFO_FUENTE;
    this.construirForm();
    this.dependenciaHelper.get().subscribe((res: any) => {
      console.info(res);
      this.dependencias = res;
    });
    this.dependenciaSeleccionada[0] = {
      Id: 0,
      ValorDependencia: 0,
    }
  }

  ngOnInit() {}

  validarForm(event) {
    // console.info('event', event);
    this.info_fuente = event.data.FuenteFinanciamiento;
    // console.info('info', this.info_fuente);
    // debugger;
    this.steep.next();
  }

  validarFormDependencias(event) {
    // console.info('event2', event);
    // console.info('info', this.info_fuente);
    // debugger;
  }


  validarEdicionDependencias(rubro: Rubro , dependencias: any, index: number) {
    if (this.rubrosAsociados[rubro.Codigo].Dependencias[index] === undefined) {
     return false;
    }
    return !this.entrarEditar && this.rubrosAsociados[rubro.Codigo].Dependencias[index].Id > 0;
  }
  dependenciaExists(dependencia) {
  return dependencia.Id > 0;
}


  asignarDependencia($event: any, rubro: Rubro, dependencias: any, index: number) {
    this.rubrosAsignados.filter(data => {
      data === rubro;
      data['Dependencias'].push({Id: 0, ValorDependencia: 0});
    });    
    console.info(dependencias)
   this.rubrosAsociados[rubro.Codigo].Dependencias[index] = dependencias;
   this.entrarEditar = true;
   this.validarLimiteApropiacion(rubro);
   this.entrarAddProductos = true; 
console.info(this.rubrosAsociados);
  }
    editarDependencia($event: any, rubro: Rubro, dependencias: any, index: number) {
    console.info(dependencias);
    this.rubrosAsociados[rubro.Codigo].Dependencias[index] = dependencias;
    this.entrarEditar = false;
    this.validarLimiteApropiacion(rubro); 
    console.info(this.rubrosAsociados);    
  }

  validarLimiteApropiacion(rubro: Rubro) {
   let totalDep = this.rubrosAsociados[rubro.Codigo].Dependencias.reduce(
     (total,dep) => total + (dep.ValorDependencia || 0), 0) ;
   this.totalPermitido = totalDep <= rubro.ApropiacionInicial;
   console.info(totalDep);
   if (!this.totalPermitido) {
     this.popManager.showErrorAlert('Valor Excedido Apropiación'+' para el Rubro '+rubro.Nombre);
   }
  }

  entrandoEditar(dep) {
    this.dependenciaSeleccionada = dep;
    this.entrarEditar = true;
  }

  agregarDependencia($event, rubro: Rubro) {
    this.rubrosAsignados.filter(data => {
      data === rubro;
      data['Dependencias'].push(-1);
    });
  }

  quitarDependencia($event, rubro: Rubro, index: any) {
    this.rubrosAsociados[rubro.Codigo].Dependencias.splice(index, 1);;
    this.rubrosAsignados.filter(data => {
      data === rubro;
      data['Dependencias'].splice(index, 1);
    });
    console.info(this.rubrosAsociados[rubro.Codigo]);
    console.info(this.rubrosAsignados);
  }
  quitarRubro(rubro: Rubro) {
    this.rubrosAsignados = this.rubrosAsignados.filter(p => {
      return JSON.stringify(p) !== JSON.stringify(rubro);
    });

    let prop = rubro.Codigo;
    // console.info(prop);
    delete this.rubrosAsociados[prop];
    // console.info(this.rubrosAsociados);
  }

  receiveMessage($event) {
    if (
      this.rubrosAsignados.filter(data => data.Codigo === $event.Codigo)
        .length === 0
    ) {
      $event['Dependencias'] = [{Id: 0, ValorDependencia: 0}];  
      // console.info($event);
      this.rubrosAsignados = [...this.rubrosAsignados, $event];
      this.rubrosAsociados[$event.Codigo] = {
        Dependencias: [],
        Productos: []
      };
      // console.info(this.rubrosAsociados);
    }
  }

  registrar() {}

  cleanForm() {}

  aniadirNodo() {}

  construirForm() {
    this.formInfoFuente.btn = this.translate.instant('GLOBAL.continuar');

    for (let i = 0; i < this.formInfoFuente.campos.length; i++) {
      this.formInfoFuente.campos[i].label = this.formInfoFuente.campos[
        i
      ].label_i18n;
      this.formInfoFuente.campos[i].placeholder = this.formInfoFuente.campos[
        i
      ].placeholder_i18n;
    }
  }
}
