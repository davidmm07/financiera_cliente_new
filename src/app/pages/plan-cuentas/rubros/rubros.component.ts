import { Component, OnInit } from '@angular/core';
import { RubroService } from '../../../@core/data/rubro.service';
import { Rubro } from '../../../@core/data/models/rubro';
import { Validators } from '@angular/forms';



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
    this.construirForm();
    this.rubroSeleccionado = {
      Codigo: '',
      Nombre: '',
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
   /*  for (let i = 0; i < this.formInfoRubro.campos.length; i++) {
      this.formInfoRubro.campos[i].label =  this.formInfoRubro.campos[i].label_i18n;
      this.formInfoRubro.campos[i].placeholder = this.formInfoRubro.campos[i].label_i18n;
    } */
  }

  receiveMessage($event) {
    console.log($event);
    this.rubroSeleccionado = <Rubro>$event
    console.log(this.rubroSeleccionado);
  }


  validarForm(event) {
   
  }

}