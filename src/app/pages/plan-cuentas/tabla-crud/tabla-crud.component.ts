import { Component, OnInit } from '@angular/core';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from './smart-table-datepicker/smart-table-datepicker.component'
import { LocalDataSource } from 'ng2-smart-table';
import { ProductoHelper } from '../../../helpers/productos/productoHelper';
import { PopUpManager } from '../../../managers/popUpManager';
import Swal from 'sweetalert2';
import { Producto } from '../../../@core/data/models/producto';

@Component({
  selector: 'ngx-tabla-crud',
  templateUrl: './tabla-crud.component.html',
  styleUrls: ['./tabla-crud.component.scss'],
})
export class TablaCrudComponent implements OnInit {

  uid: number;
  source: LocalDataSource = new LocalDataSource();
  entrarCrearProd: boolean;
  entrarEditarProd: boolean;
  productoData: Producto;
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

  constructor(private prHelper: ProductoHelper, private pUpManager: PopUpManager) {
    this.entrarCrearProd = false;
    this.entrarEditarProd = false;
    this.loadData();
    this.productoData = <Producto>{};
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

  onCreate(): void {
    console.info(this.productoData);
   this.prHelper.productoRegister(this.productoData).subscribe(res => {
      console.info(this.productoData + 'Rest' + res);
      if (res !== null) {
        console.info(res);
        this.loadData();
        this.pUpManager.showInfoToast('Producto registrado satisfactoriamente');
      }
    });

    this.entrarCrearProd = false;

    this.loadData();
  }

  onEdit(): void {
    console.info(this.productoData.Id)
    this.prHelper.productoUpdate(this.productoData).subscribe(res => {
      if (res !== null) {
        this.loadData();
        this.pUpManager.showInfoToast('Producto actualizado satisfactoriamente');
      }
    });

    this.entrarEditarProd = !this.entrarEditarProd;
    this.loadData();

  }

  cargarProducto(event) {
    console.info(event);
    this.productoData = {
      Id: event.data._id,
      Nombre: event.data.Nombre,
      Descripcion: event.data.Descripcion,
    }
  }

  onDelete(event): void {
    Swal({
      type: 'question',
      title: 'Eliminar',
      text: '¿Esta seguro de eliminar este producto?',
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
    }).then(result => {
      if (result.value) {
        this.prHelper.productoDelete(event.data._id).subscribe(res => {
          if (res !== null) {
            this.loadData();
            this.pUpManager.showInfoToast('Producto eliminado satisfactoriamente');
          }
        });
      } else {
        this.pUpManager.showErrorToast('El producto no se ha podido eliminar');
      }
    })

  }

}
