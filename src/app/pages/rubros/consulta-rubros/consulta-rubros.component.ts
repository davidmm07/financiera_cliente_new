import { Component, OnInit } from '@angular/core';
import { RubroService } from '../../../@core/data/rubro.service';
import { Rubro } from '../../../@core/data/models/rubro';
import { Validators } from '@angular/forms';
import { FORM_INFO_RUBRO } from './form_info_rubro';
import { RubroHelper } from '../../../helpers/rubros/rubroHelper';
import { PopUpManager } from '../../../managers/popUpManager';
import { TranslateService } from '@ngx-translate/core';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'consulta-rubros',
  templateUrl: './consulta-rubros.component.html',
  styleUrls: ['./consulta-rubros.component.scss'],
})
export class ConsultaRubrosComponent implements OnInit {
  rubroSeleccionado: any;
  info_rubro: Rubro;
  insertarRubro = false;
  formInfoRubro: any;
  constructor(
    private rubroService: RubroService,
    private rbrHelper: RubroHelper,
    private pUpManager: PopUpManager,
    private translate: TranslateService) {
    this.formInfoRubro = FORM_INFO_RUBRO;
    this.construirForm();
    this.rubroSeleccionado = {
      Codigo: '',
      Nombre: '',
    };
  }

  ngOnInit() {
    this.info_rubro = {} as Rubro;
    this.getRubros();

  }

  getRubros() {
    this.info_rubro = this.rubroService.get("rubro")
  }
  construirForm() {
    for (let i = 0; i < this.formInfoRubro.campos.length; i++) {
      this.formInfoRubro.campos[i].label = this.formInfoRubro.campos[i].label_i18n;
      this.formInfoRubro.campos[i].placeholder = this.formInfoRubro.campos[i].label_i18n;
    }
  }

  receiveMessage($event) {
    console.log($event);
    this.rubroSeleccionado = <Rubro>$event

    console.log(this.rubroSeleccionado);
  }


  validarForm(event) {

  }

  sendRubro() {
    const data = {
      RubroPadre: {
        Id: 2 ,
        Codigo: '2',
      },
      RubroHijo: {
        Organizacion: 1,
        Codigo: '2-1',
        Descripcion: 'test',
        UnidadEjecutora: 1,
        Nombre: 'test',
        Vigencia: 2019,
        Estado: 1,
      },
    }
    this.rbrHelper.rubroRegister(data).subscribe(
      (res) => {
        console.table(res)
        if (res.Type === 'error') {
          this.pUpManager.showErrorAlert(`${this.translate.instant('RUBRO.rubro_registrado_error')}`);
        } else {
          this.pUpManager.showSuccessAlert(`${this.translate.instant('RUBRO.rubro_registrado_success')} : ${res.Codigo}`);
        }
      },
    )
  }

}