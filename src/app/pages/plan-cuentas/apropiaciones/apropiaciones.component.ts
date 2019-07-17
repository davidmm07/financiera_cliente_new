import { Component, OnInit, Input } from "@angular/core";
import { Rubro } from "../../../@core/data/models/rubro";
import { ApropiacionHelper } from "../../../helpers/apropiaciones/apropiacionHelper";
import { PopUpManager } from "../../../managers/popUpManager";
import { Apropiacion } from '../../../@core/data/models/apropiacion';

@Component({
  selector: "apropiaciones",
  templateUrl: "./apropiaciones.component.html",
  styleUrls: ["./apropiaciones.component.scss"]
})
export class ApropiacionesComponent implements OnInit {

  @Input() vigenciaSeleccionada;
  rubroSeleccionado: any;
  apropiacion: Apropiacion;
  apropiacionAprobada: boolean;
  valorApropiacion
  clean = false;
  valoringresos = 666666666666;
  valoregresos = 666666666666;

  constructor(
    private apHelper: ApropiacionHelper,
    private popManager: PopUpManager
  ) {
    this.rubroSeleccionado = {
      Id: 0,
      Codigo: "",
      Nombre: "",
      ApropiacionInicial: 0,
    };

    this.apropiacion = {
      Id: 0,
      Vigencia: 0,
      Valor: 0,
      IdEstadoApropiacion: 0,
      IdRubro: 0,
    };
  }


  ngOnInit() {
    this.apropiacion = {} as Apropiacion;
  }

  receiveMessage($event) {
    this.rubroSeleccionado = <Rubro>$event;
    this.rubroSeleccionado.Id = parseInt(this.rubroSeleccionado.Id, 0);
    this.rubroSeleccionado.Nombre = " ";
    this.rubroSeleccionado.UnidadEjecutora = parseInt(
      this.rubroSeleccionado.UnidadEjecutora,
      0
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



  preAsignarApropiacion(event) {
    if (event.valid) {
      event.data.IdRubro = typeof this.rubroSeleccionado.Id === 'undefined' ? undefined : this.rubroSeleccionado.Id;
      event.data.Vigencia = typeof this.apropiacion.Vigencia === 'undefined' ? undefined : this.vigenciaSeleccionada.vigencia;
      event.data.Valor = typeof this.apropiacion.Valor === 'undefined' ? undefined : this.apropiacion.Valor;
      event.data.IdEstadoApropiacion = 1; //Estado pendiente

      this.apHelper.apropiacionRegister(event.data).subscribe((res) => {
        if (res) {
          this.popManager.showSuccessAlert('Se registro la preasignación de apropiación correctamente!');
          this.cleanForm()
          //this.eventChange.emit(true);
        }
      });
    } else {
      this.popManager.showErrorAlert('No se pudo registrar la preasignación de apropiación');
    }
  }
}
