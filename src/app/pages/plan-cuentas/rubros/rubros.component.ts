import { Component, OnInit } from '@angular/core';
import { RubroService } from '../../../@core/data/rubro.service';
import { Rubro } from '../../../@core/data/models/rubro';
import { Validators } from '@angular/forms';
import { FORM_INFO_RUBRO } from './form_info_rubro';



@Component({
  selector: 'rubros',
  templateUrl: './rubros.component.html',
  styleUrls: ['./rubros.component.scss']
})
export class RubrosComponent implements OnInit {
  rubroSeleccionado : any;
  info_rubro:Rubro;
  insertarRubro = false;
  formInfoRubro: any;
  constructor(private rubroService: RubroService) { 
    this.formInfoRubro=FORM_INFO_RUBRO;
    this.construirForm();
    this.rubroSeleccionado = {
      Codigo: '',
      Nombre: '',
      };
    this.loadLists();
  }

  ngOnInit() {
    this.info_rubro = {} as Rubro;
    this.getRubros();

  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formInfoRubro.campos.length; index++) {
      const element = this.formInfoRubro.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }

  getRubros(){
    this.info_rubro = this.rubroService.get("rubro");
    this.info_rubro.RubroPadre = this.rubroSeleccionado;
  }
  construirForm() { 
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


 /*  validarForm(event) {
   
  } */

  public loadLists() {
        this.formInfoRubro.campos[this.getIndexForm('UnidadEjecutora')].opciones = [
          {Valor: 1},
          {Valor: 2},
          {Valor: 3}
      ];
        this.formInfoRubro.campos[this.getIndexForm('Entidad')].opciones = [
          {Valor: 1},
          {Valor: 2},
          {Valor: 3}
      ];  
  }

  registrarRubro(){
    this.insertarRubro = !this.insertarRubro;
    console.log("Huawei",this.rubroSeleccionado)
  }
}  