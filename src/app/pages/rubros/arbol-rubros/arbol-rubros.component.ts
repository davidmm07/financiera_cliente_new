import { Component, OnInit } from '@angular/core';
import { RubroService } from '../../../@core/data/rubro.service';
import { Rubro } from '../../../@core/data/models/rubro';
import { Validators } from '@angular/forms';
import { FORM_INFO_RUBRO } from './form_info_rubro';

@Component({
  selector: 'arbol-rubros',
  templateUrl: './arbol-rubros.component.html',
  styleUrls: ['./arbol-rubros.component.scss']
})
export class ArbolRubrosComponent implements OnInit {

  info_rubro:Rubro;
  formInfoRubro: any;
  constructor(private rubroService: RubroService) { 
    this.formInfoRubro=FORM_INFO_RUBRO;
    this.construirForm();
  }

  ngOnInit() {
    this.info_rubro = {} as Rubro;
    this.getRubros();
  }

  getRubros(){
    this.info_rubro = this.rubroService.get("rubro")
  }
  construirForm() {
    // this.formInfoRubro.titulo = this.translate.instant('GLOBAL.propuesta_grado');
    this.formInfoRubro.btn = 'guardar';
    for (let i = 0; i < this.formInfoRubro.campos.length; i++) {
      this.formInfoRubro.campos[i].label =  this.formInfoRubro.campos[i].label_i18n;
      this.formInfoRubro.campos[i].placeholder = this.formInfoRubro.campos[i].label_i18n;
    }
  }


  validarForm(event) {
    // const propuesta = {
    //   Nombre: event.data.PropuestaGrado.Nombre,
    //   Resumen: event.data.PropuestaGrado.Resumen,
    //   GrupoInvestigacion: event.data.PropuestaGrado.GrupoInvestigacion,
    //   LineaInvestigacion: event.data.PropuestaGrado.LineaInvestigacion,
    //   FormatoProyecto: event.data.PropuestaGrado.FormatoProyecto.file,
    //   Admision: {
    //     Id: this.admision_id,
    //   },
    //   TipoProyecto: event.data.PropuestaGrado.TipoProyecto,
    // }
    // if (event.valid) {
    //   if (this.info_propuesta_grado === undefined) {
    //     this.createPropuestaGrado(propuesta);
    //   } else {
    //     this.updatePropuestaGrado(propuesta);
    //   }
    // }
  }

}
