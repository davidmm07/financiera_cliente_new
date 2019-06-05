import { Component, OnInit } from '@angular/core';
import { RubroService } from '../../../@core/data/rubro.service';
import { Rubro } from '../../../@core/data/models/rubro';

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
    this.getPaises();
  }

  getPaises(){
    this.rubro = this.rubroService.get("rubro")
  }
}
