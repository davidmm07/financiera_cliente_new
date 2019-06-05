import { Component, OnInit } from '@angular/core';
import { RubroService } from '../../../@core/data/rubro.service';
import { Rubro } from '../../../@core/data/models/rubro';
import { Validators } from '@angular/forms';

@Component({
  selector: 'arbol-rubros',
  templateUrl: './arbol-rubros.component.html',
  styleUrls: ['./arbol-rubros.component.scss']
})
export class ArbolRubrosComponent implements OnInit {

  rubro:Rubro;

  constructor(private rubroService: RubroService) { 

  }

  ngOnInit() {
    this.rubro = {} as Rubro;
    this.getRubros();
  }

  getRubros(){
    this.rubro = this.rubroService.get("rubro")
  }

  //configuracion para formulario de informacion de rubros
  dynamicFormConfig = [
    {
      type: 'input',
      divClass: 'col-lg-6',
      label: 'Código ',
      labelClass: 'label label-danger',
      class: 'form-control',
      name: 'Codigo',
      inputType: 'text',
      placeholder: '0-0-0-0',
      validation: [Validators.required]
    },
    {
      type: 'input',
      divClass: 'col-lg-6',
      label: 'Unidad Ejecutora ',
      labelClass: 'label label-danger',
      class: 'form-control',
      name: 'unidadEjecutora',
      inputType: 'text',
      placeholder: 'Upload Anything',
      validation: [Validators.required]
    },
    {
      type: 'input',
      divClass: 'col-lg-6',
      label: 'Entidad',
      labelClass: 'label label-danger',
      class: 'form-control',
      name: 'entidad',
      inputType: 'text',
      placeholder: 'Upload Anything',
      validation: [Validators.required]
    },
    
    {
      type: 'button',
      divClass: 'col-sm-4',
      label: 'submit',
      labelClass: 'pad-20',
      text: 'Submit',
      inputType: 'submit',
      class: 'btn btn-dcb-info',
      name: 'submit',
    },
    {
      type: 'button',
      divClass: 'col-sm-4',
      label: 'Editar',
      labelClass: 'pad-20',
      text: 'Editar',
      inputType: 'submit',
      class: 'btn btn-dcb-info',
      name: 'submit',
    }
  ];

  submit(model: any) {
    console.log(model);
  }

}
