import { Component, OnInit } from '@angular/core';
import { Rubro } from '../../../@core/data/models/rubro';

@Component({
  selector: 'consulta-apropiaciones-iniciales',
  templateUrl: './consulta-apropiaciones-iniciales.component.html',
  styleUrls: ['./consulta-apropiaciones-iniciales.component.scss']
})
export class ConsultaApropiacionesInicialesComponent implements OnInit {
  rubroSeleccionado : any;
  constructor() {
    this.rubroSeleccionado = {
      Codigo: '',
      Nombre: '',
      };
   }

  ngOnInit() {
  }

  receiveMessage($event) {
    console.log($event);
    this.rubroSeleccionado = <Rubro>$event

    console.log(this.rubroSeleccionado);
  }
}
