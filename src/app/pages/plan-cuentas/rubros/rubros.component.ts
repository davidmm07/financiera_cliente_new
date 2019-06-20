import { Component, OnInit } from '@angular/core';
import { RubroService } from '../../../@core/data/rubro.service';
import { Rubro } from '../../../@core/data/models/rubro';
import { Validators } from '@angular/forms';
import { FORM_INFO_RUBRO } from './form_info_rubro';
import { RubroHelper } from '../../../helpers/rubros/rubroHelper';
import { PopUpManager } from '../../../managers/popUpManager';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'rubros',
  templateUrl: './rubros.component.html',
  styleUrls: ['./rubros.component.scss']
})
export class RubrosComponent implements OnInit {
  rubroSeleccionado: any;
  info_rubro: Rubro;
  insertarRubro = false;
  formInfoRubro: any;
  constructor(
    private translate: TranslateService,
    private rubroService: RubroService,
    private rbHelper: RubroHelper,
    private popManager: PopUpManager,
  ) {
    this.formInfoRubro = FORM_INFO_RUBRO;
    this.construirForm();
    this.rubroSeleccionado = {
    };
    this.loadLists();
  }

  ngOnInit() {
    this.info_rubro = {} as Rubro;
    this.getRubros();

  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formInfoRubro.campos.length; index++) {
      const element = this.formInfoRubro.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }

  getRubros() {
    //this.info_rubro = this.rubroService.get("rubro");
    //this.info_rubro.RubroPadre = this.rubroSeleccionado;
  }
  construirForm() {
    this.formInfoRubro.titulo = this.translate.instant('GLOBAL.articulo');
    this.formInfoRubro.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formInfoRubro.campos.length; i++) {
      this.formInfoRubro.campos[i].label = this.formInfoRubro.campos[i].label_i18n;
      this.formInfoRubro.campos[i].placeholder = this.formInfoRubro.campos[i].label_i18n;
    }
  }

  receiveMessage($event) {
    this.rubroSeleccionado = <Rubro>$event
  }

  public loadLists() {
    this.formInfoRubro.campos[this.getIndexForm('UnidadEjecutora')].opciones = [
      { Valor: 1 } // Cargar desde el token o la directiva que se indique.
    ];
    this.formInfoRubro.campos[this.getIndexForm('Entidad')].opciones = [
      { Valor: 1 },
      { Valor: 2 },
      { Valor: 3 },
    ];
  }

  aniadirNodo() {
    this.insertarRubro = !this.insertarRubro;
  }



  validarForm(event) {
    if (event.valid) {
      event.data.RubroPadre = typeof this.rubroSeleccionado.Codigo === 'undefined' ? undefined : this.rubroSeleccionado;
      event.data.RubroHijo.UnidadEjecutora = event.data.RubroHijo.UnidadEjecutora.Valor;
      event.data.RubroHijo.Organizacion = event.data.RubroHijo.Organizacion.Valor;
      this.rbHelper.rubroRegister(event.data).subscribe((res) => {
        this.popManager.showSuccessAlert('Se registro el Rubro correctamente!');
        this.aniadirNodo();
      });
    } else {
      this.popManager.showErrorAlert('Datos Incompletos');
    }
  }
}