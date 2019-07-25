import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-productos-rubro',
  templateUrl: './productos-rubro.component.html',
  styleUrls: ['./productos-rubro.component.scss'],
})
export class ProductosRubroComponent implements OnInit {


  rubro: any;

  productos: any = [];
  productoSeleccionado: any = [];

  entrarEditar: boolean;
  editando: boolean;



  constructor() {
    this.editando = false;
    this.entrarEditar = false;
    this.rubro = {
      Productos: [{ producto: { id: 1, Nombre: 'p1' }, porcentaje: 50 }, { producto: { id: 2, Nombre: 'p2' }, porcentaje: 30 }],
    }
    this.productos = [{ id: 1, Nombre: 'p1' }, { id: 2, Nombre: 'p2' }, { id: 2, Nombre: 'p3' }, { id: 2, Nombre: 'p4' }];
    this.productoSeleccionado = {
      producto: this.productos[0],
      porcentaje: 0,
    }
    console.info(this.getPorcentajeAsignado())
  }


  ngOnInit() {
  }


  asignarProducto(productoAsignado: any, porcentaje: number, index: number) {
    if ((this.getPorcentajeAsignado() + porcentaje - this.rubro.Productos[index].porcentaje) <= 100) {
      this.rubro.Productos[index].producto = productoAsignado;
      this.rubro.Productos[index].porcentaje = porcentaje;
    } else if ((this.getPorcentajeAsignado() + porcentaje - this.rubro.Productos[index].porcentaje) > 100) { alert(' el porcentaje es mayor a 100%');
    console.info(this.getPorcentajeAsignado() + ':' + porcentaje)
    this.rubro.Productos[index].porcentaje -= 1 ; }
  }



  agregarProducto() {
    if (this.rubro.Productos.filter(
      (prod) => {
        return (JSON.stringify(prod.producto) === JSON.stringify(this.productoSeleccionado.producto));
      }).length === 0) {
      this.rubro.Productos.push({
        producto: this.productoSeleccionado.producto,
        porcentaje: this.productoSeleccionado.porcentaje,
      });
    } else alert('el producto ya esta asignado');
  }

  eliminarProducto($event, producto: any) {
    this.rubro.Productos = this.rubro.Productos.filter((p) => {
      return JSON.stringify(p) !== JSON.stringify(producto);
    })
  }

  editarProducto() {
    this.editando = true;
    this.rubro.Productos.map(
      (prod) => {
        if (prod === this.productoSeleccionado) {
          prod.producto = this.productoSeleccionado.producto;
          prod.porcentaje = this.productoSeleccionado.porcentaje;
        }
      },
    )
    this.editando = false;
    this.entrarEditar = false;
    this.productoSeleccionado = {
      producto: this.productos[0],
      porcentaje: 0,
    }
  }

  entrandoEditar(producto: any) {
    this.productoSeleccionado = producto;
    this.entrarEditar = true;
  }

  getPorcentajeAsignado(): number {
    let val: number = 0;
    this.rubro.Productos.map((p) => {
      val += p.porcentaje
    })
    return val
  }

}
