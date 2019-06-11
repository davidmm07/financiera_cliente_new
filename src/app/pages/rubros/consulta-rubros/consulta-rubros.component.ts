import { Component, OnInit } from '@angular/core';
import { RubroService } from '../../../@core/data/rubro.service';
import { Rubro } from '../../../@core/data/models/rubro';
import { Validators } from '@angular/forms';
import { FORM_INFO_RUBRO } from './form_info_rubro';


@Component({
  selector: 'consulta-rubros',
  templateUrl: './consulta-rubros.component.html',
  styleUrls: ['./consulta-rubros.component.scss']
})
export class ConsultaRubrosComponent implements OnInit {
  rubroSeleccionado : any;
  info_rubro:Rubro;
  insertarRubro = false;
  formInfoRubro: any;
  constructor(private rubroService: RubroService) { 
    this.formInfoRubro=FORM_INFO_RUBRO;
    this.construirForm();
    this.rubroSeleccionado = {
      CodigoRubro: '',
      NombreRubro: '',
      };
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
   
    for (let i = 0; i < this.formInfoRubro.campos.length; i++) {
      this.formInfoRubro.campos[i].label =  this.formInfoRubro.campos[i].label_i18n;
      this.formInfoRubro.campos[i].placeholder = this.formInfoRubro.campos[i].label_i18n;
    }
  }

  receiveMessage($event) {
    console.log($event);
    this.rubroSeleccionado = <Rubro>$event

    console.log(this.rubroSeleccionado);
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