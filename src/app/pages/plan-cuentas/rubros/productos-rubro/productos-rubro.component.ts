import { Component, OnInit } from '@angular/core';
import { Rubro } from '../../../../@core/data/models/rubro';


@Component({
  selector: 'ngx-productos-rubro',
  templateUrl: './productos-rubro.component.html',
  styleUrls: ['./productos-rubro.component.scss']
})
export class ProductosRubroComponent implements OnInit {

 
  rubro: any;

  productos: any = [];
  productosAsociados: any = {}
  productoSeleccionado: any= [];


  constructor() { 
    this.rubro={
      Productos: [ { producto: {id: 1 , Nombre : "p1" } , porcentaje: 50 } , { producto: {id: 2 , Nombre : "p2" } , porcentaje: 30 } ],
    }
    this.productos =[ {id: 1 , Nombre : "p1" } , {id: 2 , Nombre : "p2"}  , {id: 2 , Nombre : "p3"}  , {id: 2 , Nombre : "p4" }];
  }

  ngOnInit() {
  }


  asignarProducto(productoAsignado: any , porcentaje: number , index: number) {
    console.info(productoAsignado)
    console.info("perc: "+porcentaje)
    this.rubro.Productos[index].producto = productoAsignado;
    this.rubro.Productos[index].porcentaje = porcentaje;
      }
   
  

  agregarProducto($event) {
    this.rubro.Productos.push({ producto: this.productos[0] , porcentaje: 0 });

  }

  eliminarProducto($event, producto: any){
      this.rubro.Productos=this.rubro.Productos.filter((p)=>{
      return JSON.stringify(p)!=JSON.stringify(producto);
    })
  }
}
