import { Component, OnInit } from "@angular/core";
import { Rubro } from "../../../@core/data/models/rubro";
import { ApropiacionHelper } from "../../../helpers/apropiaciones/apropiacionHelper";
import { PopUpManager } from "../../../managers/popUpManager";

@Component({
  selector: "apropiaciones",
  templateUrl: "./apropiaciones.component.html",
  styleUrls: ["./apropiaciones.component.scss"]
})
export class ApropiacionesComponent implements OnInit {
  rubroSeleccionado: any;
  apropiacionAprobada: boolean;
  vigenciaSeleccionada: any;
  valorApropiacion: any;
  validado = false;
  constructor(
    private apHelper: ApropiacionHelper,
    private popManager: PopUpManager
  ) {
    this.rubroSeleccionado = {
      Codigo: "",
      Nombre: ""
    };

    this.vigenciaSeleccionada = 0;
  }

  ngOnInit() {}

  receiveMessage($event) {
    this.rubroSeleccionado = <Rubro>$event;
    this.rubroSeleccionado.Id = parseInt(this.rubroSeleccionado.Id, 0);
    this.rubroSeleccionado.UnidadEjecutora = parseInt(
      this.rubroSeleccionado.UnidadEjecutora,
      0
    );
  }

  receiveApropiationValue($event) {
    this.valorApropiacion = "hhh";
    console.log("Camila la mejor" + this.valorApropiacion)
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
}
