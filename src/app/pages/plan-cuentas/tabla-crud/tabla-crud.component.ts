import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-tabla-crud',
  templateUrl: './tabla-crud.component.html',
  styleUrls: ['./tabla-crud.component.scss']
})
export class TablaCrudComponent implements OnInit {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      columnTitle: 'Acciones',
      custom: [{ name: 'editar', title: '<i class="nb-edit"></i>' },
      { name: 'borrar', title: '<i class="nb-trash"></i>' }],
      position:  'left',
    },
    columns: {
      id: {
        title: 'ID'
      },
      nombre: {
        title: 'Nombre'
      },
      descripcion: {
        title: 'Descripción'
      },
      fecha_creacion: {
        title: 'Fecha de Creación',
        type: 'html', editor:{ type: 'date'}  
      }
    }
  };


  data = [
    {
      id: 1,
      nombre: "Leanne Graham",
      descripcion: "Bret",
      fecha_creacion: "Sincere@april.biz"
    },
    {
      id: 2,
      nombre: "Ervin Howell",
      descripcion: "Antonette",
      fecha_creacion: "Shanna@melissa.tv"
    },
    {
      id: 11,
      nombre: "Nicholas DuBuque",
      descripcion: "Nicholas.Stanton",
      fecha_creacion: "Rey.Padberg@rosamond.biz"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
