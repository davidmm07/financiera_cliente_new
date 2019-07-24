import { Component, OnInit } from '@angular/core';
import { FORM_INFO_FUENTE } from './form_info_fuente';
import { FORM_DEPENDENCIA_RUBRO } from './form_dependencia_rubro';
import { TranslateService } from '@ngx-translate/core';
import { Rubro } from '../../../@core/data/models/rubro';
import { FuenteFinanciamiento } from '../../../@core/data/models/fuente_financiamiento';
import { DependenciaHelper } from '../../../helpers/oikos/dependenciaHelper';
import { PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'ngx-fuentes',
  templateUrl: './fuentes.component.html',
  styleUrls: ['./fuentes.component.scss'],
})

export class FuentesComponent implements OnInit {
  formInfoFuente: any;
  rubroSeleccionado: any;
  info_fuente: FuenteFinanciamiento;
  clean = false;
  rubrosAsignados: any = [];
  dependencias: any = [];
  dependenciasAsociadas: any = {}
  dependenciaSeleccionada: any;

  formDependenciarubro = FORM_DEPENDENCIA_RUBRO;

  constructor(private translate: TranslateService, private dependenciaHelper: DependenciaHelper) {
    this.formInfoFuente = FORM_INFO_FUENTE;
    this.construirForm();
    this.dependenciaHelper.get().subscribe((res: any) => {
      console.info(res);
      this.formDependenciarubro.campos[0].opciones = res;
      this.dependencias = res;
    });
  }

  ngOnInit() { }

  validarForm(event) {
    console.info('event', event);
  }

  asignarDependencia($event: any, rubro: Rubro) {
    this.verificarAsignacionDependencia(rubro, this.dependencias[$event]);
  }

  verificarAsignacionDependencia(rubro: Rubro, dependenciaAsignada: any) {
    this.rubrosAsignados.filter((data) => {
      if (data === rubro) {
        for (let i = 0; i < data['Dependencias'].length; i++) {
          if (data['Dependencias'][i] === -1) {
            data['Dependencias'][i] = dependenciaAsignada;
          }
        }
      }
    });
  }

  agregarDependencia($event, rubro: Rubro) {
    this.rubrosAsignados.filter((data) => {
      (data === rubro); data['Dependencias'].push(-1)
    });
  }

  quitarDependencia($event, rubro: Rubro) {
    this.rubrosAsignados.filter((data) => {
      (data === rubro); data['Dependencias'].pop(-1)
    });
  }

  receiveMessage($event) {
    if (this.rubrosAsignados.filter((data) => (data.Codigo === $event.Codigo)).length === 0) {
      $event['Dependencias'] = [-1];
      this.rubrosAsignados = [...this.rubrosAsignados, $event];
    }
  }


  registrar() {
    // console.log(this.rubrosAsignados);
  }

  cleanForm() { }

  aniadirNodo() { }

  construirForm() {
    this.formInfoFuente.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formInfoFuente.campos.length; i++) {
      this.formInfoFuente.campos[i].label = this.formInfoFuente.campos[i].label_i18n;
      this.formInfoFuente.campos[i].placeholder = this.formInfoFuente.campos[i].label_i18n;
    }
  }

}
