import { Component, OnInit, Input } from '@angular/core';
import { Rubro } from '../../../@core/data/models/rubro';
import { ApropiacionHelper } from '../../../helpers/apropiaciones/apropiacionHelper';
import { PopUpManager } from '../../../managers/popUpManager';
import { ArbolApropiacion } from '../../../@core/data/models/arbol_apropiacion';

@Component({
  selector: 'ngx-apropiaciones',
  templateUrl: './apropiaciones.component.html',
  styleUrls: ['./apropiaciones.component.scss'],
})
export class ApropiacionesComponent implements OnInit {

  @Input() vigenciaSeleccionada;
  @Input() optionPlanCuentas: string;
  rubroSeleccionado: any;
  // apropiacion: Apropiacion;
  apropiacion: ArbolApropiacion;
  apropiacionAprobada: boolean;
  valorApropiacion
  clean = false;
  valoringresos = 666666666666;
  valoregresos = 666666666666;
  opcion: string;

  constructor(
    private apHelper: ApropiacionHelper,
    private popManager: PopUpManager,
  ) {
    this.rubroSeleccionado = {
      Id: 0,
      Codigo: '',
      Nombre: '',
      Descripcion: '',
      Hijos: '',
      Padre: '',
      ApropiacionInicial: 0,
    };

    this.apropiacion = {
      Vigencia: 0,
      ApropiacionInicial: 0,
      Estado: '',
      Rubro: null,
    };

    this.opcion = this.optionPlanCuentas;
  }


  ngOnInit() {
    this.apropiacion = {} as ArbolApropiacion;
  }

  receiveMessage($event) {
    this.rubroSeleccionado = <Rubro>$event;
    this.rubroSeleccionado.Id = parseInt(this.rubroSeleccionado.Id, 0);
    this.rubroSeleccionado.Nombre = ' ';
    this.rubroSeleccionado.UnidadEjecutora = parseInt(
      this.rubroSeleccionado.UnidadEjecutora,
      0,
    );
    this.rubroSeleccionado.ApropiacionInicial = parseInt(this.rubroSeleccionado.ApropiacionInicial, 0);

  }


  aprobarApropiacion() {
    this.apropiacionAprobada = true;
  }


  cleanForm() {
    this.clean = !this.clean;
    this.rubroSeleccionado = {};
    this.apropiacion = null;

  }

  preAsignarApropiacion() {
    const apropiacionData: ArbolApropiacion = null;
    apropiacionData.Vigencia = typeof this.apropiacion.Vigencia === 'undefined' ? undefined : this.vigenciaSeleccionada.vigencia;
    apropiacionData.Rubro.Id = typeof this.rubroSeleccionado.Id === 'undefined' ? undefined : this.rubroSeleccionado.Id;
    apropiacionData.Rubro.Nombre = typeof this.rubroSeleccionado.Nombre === 'undefined' ? undefined : this.rubroSeleccionado.Nombre;
    apropiacionData.Rubro.Descripcion = typeof this.rubroSeleccionado.Descripcion === 'undefined' ? undefined : this.rubroSeleccionado.Descripcion;
    apropiacionData.Rubro.UnidadEjecutora = typeof this.rubroSeleccionado.UnidadEjecutora === 'undefined'
    ? undefined : this.rubroSeleccionado.UnidadEjecutora;
    apropiacionData.Rubro.RubroPadre = typeof this.rubroSeleccionado.Padre === 'undefined' ? undefined : this.rubroSeleccionado.Padre;
    apropiacionData.Rubro.Hijos = typeof this.rubroSeleccionado.Hijos === 'undefined' ? undefined : this.rubroSeleccionado.Hijos;
    apropiacionData.ApropiacionInicial = typeof this.apropiacion.ApropiacionInicial === 'undefined' ? undefined : 1;
    apropiacionData.Estado = 'preasignado'; // Estado preasignado

    this.apHelper.apropiacionRegister(apropiacionData).subscribe((res) => {
      if (res) {
        this.popManager.showSuccessAlert('Se registro la preasignación de apropiación correctamente!');
        this.cleanForm()
        // this.eventChange.emit(true);
      }
    });

    // this.popManager.showErrorAlert('No se pudo registrar la preasignación de apropiación');

  }

  registrarApropiacionARubro(event) {
    if (event.valid) {
      event.data.RubroSel =
        typeof this.rubroSeleccionado.Codigo === 'undefined'
          ? undefined
          : this.rubroSeleccionado;
      event.data.Vigencia = this.vigenciaSeleccionada;
      event.data.Valor = this.valorApropiacion;
      event.data.IdEstadoApropiacion = 1;

      this.apHelper.apropiacionRegister(event.data).subscribe(res => {
        if (res) {
          this.popManager.showSuccessAlert(
            'Se registro la preasignación de apropiación correctamente!',
          );
          // this.cleanForm()
          // this.eventChange.emit(true);
        } else {
          this.popManager.showErrorAlert('Datos Erroneos');
        }
      });
    }
  }

  validarForm(event) {
    if (event.valid) {
      event.data.RubroPadre = typeof this.rubroSeleccionado.Codigo === 'undefined' ? undefined : this.rubroSeleccionado;

      event.data.RubroHijo.Codigo = typeof this.rubroSeleccionado.Codigo === 'undefined' ?
        event.data.RubroHijo.Codigo + '' :
        this.rubroSeleccionado.Codigo + '-' + event.data.RubroHijo.Codigo;

      this.apHelper.apropiacionRegister(event.data).subscribe((res) => {
        if (res) {
          this.popManager.showSuccessAlert('Se registro la preasignación de apropiación correctamente!');
          this.cleanForm()
          // this.eventChange.emit(true);
        }
      });
    } else {
      this.popManager.showErrorAlert('Datos Incompletos');
    }
  }
}
