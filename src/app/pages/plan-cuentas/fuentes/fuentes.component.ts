import { Component, OnInit } from '@angular/core';
import { FORM_INFO_RUBRO } from './form_info_rubro';
import { TranslateService } from '@ngx-translate/core';
import { Rubro } from '../../../@core/data/models/rubro';
import { DependenciaHelper } from '../../../helpers/oikos/dependenciaHelper';
import { PipeTransform, Pipe } from '@angular/core';

export let FORM_DEPENDENCIA_RUBRO = {
  titulo: 'DependenciaRubro',
  tipo_formulario: 'mini',
  btn: 'add-dependencia',
  alertas: true,
  modelo: 'DependenciaRubro',
  campos: [
    {
      etiqueta: 'select',
      claseGrid: 'col-6',
      nombre: 'dependencia',
      label: 'dependencia',
      placeholder: 'dependencia',
      requerido: true,
      tipo: 'Dependencia',
      key: 'Nombre',
      opciones: [],
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-6',
      nombre: 'Valor',
      label: 'valor',
      placeholder: 'valor',
      requerido: true,
      tipo: 'number',
    },
  ],
}

@Component({
  selector: 'ngx-fuentes',
  templateUrl: './fuentes.component.html',
  styleUrls: ['./fuentes.component.scss'],
})

export class FuentesComponent implements OnInit {
  formInfoRubro: any;
  rubroSeleccionado: any;
  info_rubro: Rubro;
  clean = false;
  rubrosAsignados: any = [];
  dependencias: any = [];
  dependenciasAsociadas: any = {}
  dependenciaSeleccionada: any;

  formDependenciarubro = FORM_DEPENDENCIA_RUBRO;

  constructor(private translate: TranslateService, private dependenciaHelper: DependenciaHelper) {
    this.formInfoRubro = FORM_INFO_RUBRO;
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

  receiveMessage($event) {
    if (this.rubrosAsignados.filter((data) => (data.Codigo === $event.Codigo)).length === 0) {
      $event['Dependencias'] = [-1];
      this.rubrosAsignados = [...this.rubrosAsignados, $event];
    }
  }


  registrar() {

  }

  cleanForm() { }

  aniadirNodo() { }

  construirForm() {
    this.formInfoRubro.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formInfoRubro.campos.length; i++) {
      this.formInfoRubro.campos[i].label = this.formInfoRubro.campos[i].label_i18n;
      this.formInfoRubro.campos[i].placeholder = this.formInfoRubro.campos[i].label_i18n;
    }
  }

}
