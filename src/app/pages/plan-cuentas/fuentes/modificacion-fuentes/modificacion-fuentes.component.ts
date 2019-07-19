import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-modificacion-fuentes',
  templateUrl: './modificacion-fuentes.component.html',
  styleUrls: ['./modificacion-fuentes.component.scss'],
})
export class ModificacionFuentesComponent implements OnInit {

  tipodocumento= ['CC', 'TI'];
  tipomodificacion= ['+', '-', 'traslado', 'suspension'];
  tipofuente= ['funcionamiento', 'inversion'];
  datepicker: any;
  traslado = {
    valor_total: 100,
    rubro_origen: {
      rubros_disponibles: [ 1 , 2 , 3 , 4 , 5 ],
      rubro_seleccionado: 1,
      dependencias: ['d1', 'd2' , 'd3' , 'd4'],
      valor: 500,
    },
    rubro_destino: {
      rubros_disponibles: [ 1 , 2 , 3 , 4 , 5 ],
      rubro_seleccionado: 1,
      dependencias: [ 'd1' , 'd2' , 'd3' , 'd4' ],
    },
  }

  dependencias: any[] = [
    {dependencia: 'OAS'},
    {dependencia: 'Red UDNET'},
    {dependencia: 'RITA'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
