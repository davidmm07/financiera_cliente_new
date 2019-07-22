import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-modificacion-fuentes',
  templateUrl: './modificacion-fuentes.component.html',
  styleUrls: ['./modificacion-fuentes.component.scss'],
})
export class ModificacionFuentesComponent implements OnInit {
  tipodocumento = ['CC', 'TI'];
  tipomodificacion = ['+', '-', 'traslado', 'suspension'];
  tipofuente = ['funcionamiento', 'inversion'];
  datepicker: any;
  dependencias: any[] = [
    { dependencia: 'OAS' },
    { dependencia: 'Red UDNET' },
    { dependencia: 'RITA' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
