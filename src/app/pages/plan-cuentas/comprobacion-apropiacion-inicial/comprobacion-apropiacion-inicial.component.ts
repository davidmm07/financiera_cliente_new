import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comprobacion-apropiacion-inicial',
  templateUrl: './comprobacion-apropiacion-inicial.component.html',
  styleUrls: ['./comprobacion-apropiacion-inicial.component.scss']
})
export class ComprobacionApropiacionInicialComponent implements OnInit {

  ingresos : number;
  egresos : number;
  comprobacion: boolean; 

  //entradas y salidas
  @Input() valoringresos: number;
  @Input() valoregresos: number;

  constructor() { 

  }

  

  ngOnInit() {
    this.ingresos=this.valoringresos;
    this.egresos=this.valoregresos;
    this.comprobacion=(this.ingresos===this.egresos);

  }

}
