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

  asignarProducto($event: any, rubro: Rubro) {
    this.verificarAsignacionProducto(rubro, this.productos[$event]);

  }

  verificarAsignacionProducto($event, productoAsignado: any) {
        for (let i = 0; i < this.rubro.Productos.length; i++) {
          if (this.rubro.Productos[i] === -1) {
            this.rubro.Productos[i] = productoAsignado;
          }
        }
      }
   
  

  agregarProducto($event, producto: any) {
    this.rubro.Productos.push(producto);
  }

  eliminarProducto($event, producto: any){
    // let filtered=this.rubro.Productos.filter((p)=>{p!=producto;});
    // this.rubro.Productos=filtered;
    this.rubro.Productos.pop();
    console.info($event)
  }
}
