import { Component, OnInit } from '@angular/core';
import { FORM_INFO_RUBRO } from './form_info_rubro';
import { TranslateService } from '@ngx-translate/core';
import { Rubro } from '../../../@core/data/models/rubro';
import { DependenciaHelper } from '../../../helpers/oikos/dependenciaHelper';
import { PipeTransform, Pipe } from '@angular/core';

export let FORM_DEPENDENCIA_RUBRO = {
  titulo: 'DependenciaRubro',
  tipo_formulario: 'mini',
  btn: 'Añadir Dependencia',
  alertas: true,
  modelo: 'DependenciaRubro',
  campos: [
    {
      etiqueta: 'select',
      claseGrid: 'col-6',
      nombre: 'Dependencia',
      label_i18n: 'dependencia',
      placeholder_i18n: 'dependencia',
      requerido: true,
      tipo: 'Dependencia',
      key: 'Nombre',
      opciones: [],
    },
    {
      etiqueta: 'input',
      claseGrid: 'col-6',
      nombre: 'Valor',
      label_i18n: 'valor',
      placeholder_i18n: 'valor',
      requerido: true,
      tipo: 'number',
    },
  ],
}

@Component({
  selector: 'fuentes',
  templateUrl: './fuentes.component.html',
  styleUrls: ['./fuentes.component.scss']
})

export class FuentesComponent implements OnInit {
  formInfoRubro: any;
  rubroSeleccionado: any;
  info_rubro: Rubro;
  clean = false;
  rubrosAsignados: any = [];
  dependencias: any = [];
  dependenciasAsociadas: any = {}
  dependencia: any;

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
    console.info("event", event);
  }

  asignarDependencia($event, rubro: Rubro) {
    console.log(rubro);
    console.log(this.dependencia);
    this.rubrosAsignados.filter((data) => {
      data['dependencias'].push(this.dependencia);
    });

  }

  receiveMessage($event) {
    if (this.rubrosAsignados.filter((data) => (data.Codigo === $event.Codigo)).length === 0) {
      $event['dependencias'] = [this.dependencias[0]];
      this.rubrosAsignados = [...this.rubrosAsignados, $event];
    }
  }


  cleanForm() {

  }

  construirForm() {
    this.formInfoRubro.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formInfoRubro.campos.length; i++) {
      this.formInfoRubro.campos[i].label = this.formInfoRubro.campos[i].label_i18n;
      this.formInfoRubro.campos[i].placeholder = this.formInfoRubro.campos[i].label_i18n;
    }
  }

}
