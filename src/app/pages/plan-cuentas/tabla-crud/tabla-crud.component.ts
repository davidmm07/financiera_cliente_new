import { Component, OnInit } from '@angular/core';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from './smart-table-datepicker/smart-table-datepicker.component'
import { LocalDataSource } from 'ng2-smart-table';
import { ProductoHelper } from '../../../helpers/productos/productoHelper';
import { PopUpManager } from '../../../managers/popUpManager';

@Component({
  selector: 'ngx-tabla-crud',
  templateUrl: './tabla-crud.component.html',
  styleUrls: ['./tabla-crud.component.scss'],
})
export class TablaCrudComponent implements OnInit {

  uid: number;
  source: LocalDataSource = new LocalDataSource();


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
    mode: 'external',
    position: 'left',
    columns: {
      _id: {
        title: 'ID',
      },
      Nombre: {
        title: 'Nombre',
      },
      Descripcion: {
        title: 'Descripción',
      },
      FechaCreacion: {
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


  // data = [
  //   {
  //     id: 1,
  //     nombre: 'Producto 1 Infraestructura y Edificaciones',
  //     descripcion: 'Bret',
  //     fecha_creacion: '2019-07-02',
  //   },
  //   {
  //     id: 2,
  //     nombre: 'Producto 2 Educación Superior y Extensión',
  //     descripcion: 'Antonette',
  //     fecha_creacion: '2019-07-03',
  //   },
  //   {
  //     id: 11,
  //     nombre: 'Producto 1 Investigación e Innovación',
  //     descripcion: 'Nicholas.Stanton',
  //     fecha_creacion: '2019-07-04',
  //   },
  // ];

  constructor(private prHelper: ProductoHelper, private pUpManager: PopUpManager) {
    this.loadData();
  }


  loadData(): void {
    this.prHelper.getProductos().subscribe(res => {
      if (res !== null) {
        const data = <Array<any>>res;
        this.source.load(data);
      }
    });
  }


  ngOnInit() {
  }

  onCreate(event): void {
    this.prHelper.productoRegister(event.data).subscribe(res => {
      console.log(event.data + "Rest" + res);
      if (res !== null) {
        console.log(res);
        this.loadData();
        this.pUpManager.showInfoToast("Producto registrado satisfactoriamente");
      }
    });
  }

  onEdit(event): void {
    this.uid = event.data._id;
    console.log(event.data._id)
    this.prHelper.productoUpdate(event.data).subscribe(res => {
      if (res !== null) {
        this.loadData();
        this.pUpManager.showInfoToast("Producto actualizado satisfactoriamente");
      }
    });

  }

  onDelete(event): void {
    this.pUpManager.showAlert("question", "Eliminar", "¿Esta seguro de eliminar este producto?");
    this.prHelper.productoDelete(event.data._id).subscribe(res => {
      if (res !== null) {
        this.loadData();
        this.pUpManager.showInfoToast("Producto eliminado satisfactoriamente");
      }
    });
  }

}
