import { Component, OnInit } from '@angular/core';
import { SmartTableDatepickerComponent , SmartTableDatepickerRenderComponent } from './smart-table-datepicker/smart-table-datepicker.component'

@Component({
  selector: 'ngx-tabla-crud',
  templateUrl: './tabla-crud.component.html',
  styleUrls: ['./tabla-crud.component.scss'],
})
export class TablaCrudComponent implements OnInit {

  uid: number;

  settings = {
    actions: {
      columnTitle: 'Acciones',
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    position: 'left',
    columns: {
      id: {
        title: 'ID',
      },
      nombre: {
        title: 'Nombre',
      },
      descripcion: {
        title: 'Descripción',
      },
      fecha_creacion: {
        title: 'Fecha Creación',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
    },
  };


  data = [
    {
      id: 1,
      nombre: 'Producto 1 Infraestructura y Edificaciones',
      descripcion: 'Bret',
      fecha_creacion: '2019-07-02',
    },
    {
      id: 2,
      nombre: 'Producto 2 Educación Superior y Extensión',
      descripcion: 'Antonette',
      fecha_creacion: '2019-07-03',
    },
    {
      id: 11,
      nombre: 'Producto 1 Investigación e Innovación',
      descripcion: 'Nicholas.Stanton',
      fecha_creacion: '2019-07-04',
    },
  ];

  constructor() {
    this.loadProductos();
  }

  ngOnInit() {
  }

  loadProductos() {
  }

  onEdit(event): void {
    this.uid = event.data.Id;
  }

  onCreate(event): void {
  }

  onDelete(event): void {
  }
}
