import { Component, OnInit } from "@angular/core";
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
  rubroSeleccionado: any;
  arbolRubro : any;
  info_apropiacion: Apropiacion; 
  apropiacionAprobada: boolean;
  vigenciaSeleccionada: any;
  valorApropiacion: any;
  validado = false;
  clean = false;
  constructor(
    private apHelper: ApropiacionHelper,
    private popManager: PopUpManager
  ) {
    this.rubroSeleccionado = {
      Codigo: "",
      Nombre: "",
      ApropiacionInicial :0,
    };

    this.vigenciaSeleccionada = 0;
  }

  ngOnInit() {
    this.info_apropiacion = {} as Apropiacion;
  }

  receiveMessage($event) {
    this.rubroSeleccionado = <Rubro>$event;
    this.rubroSeleccionado.Id = parseInt(this.rubroSeleccionado.Id, 0);
    this.rubroSeleccionado.Nombre = " ";
    this.rubroSeleccionado.UnidadEjecutora = parseInt(
      this.rubroSeleccionado.UnidadEjecutora,
      0
    );
    this.rubroSeleccionado.ApropiacionInicial = parseInt(this.rubroSeleccionado.ApropiacionInicial,0);

  }


  aprobarApropiacion() {
    this.apropiacionAprobada = true;
  }

  onClose() {
    this.apropiacionAprobada = false;
  }

  registrarApropiacionARubro(event) {
    if (event.valid) {
      event.data.RubroSel =
        typeof this.rubroSeleccionado.Codigo === "undefined"
          ? undefined
          : this.rubroSeleccionado;
      event.data.Vigencia = this.vigenciaSeleccionada;
      event.data.Valor = this.valorApropiacion;
      event.data.IdEstadoApropiacion = 1;

      this.apHelper.apropiacionRegister(event.data).subscribe(res => {
        if (res) {
          this.popManager.showSuccessAlert(
            "Se registro la preasignación de apropiación correctamente!"
          );
          //this.cleanForm()
          //this.eventChange.emit(true);
        } else {
          this.popManager.showErrorAlert("Datos Erroneos");
        }
      });
    }
  }


  cleanForm() {
  /*   this.clean = !this.clean;
    this.rubroSeleccionado = {};
    this.info_rubro = null;
    this.formInfoRubro.campos[FormManager.getIndexForm(this.formInfoRubro, 'Codigo')].prefix.value = ''; */

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
          //this.eventChange.emit(true);
        }
      });
    } else {
      this.popManager.showErrorAlert('Datos Incompletos');
    }
  }
}
