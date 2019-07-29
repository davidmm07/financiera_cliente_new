
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Rubro } from '../../../@core/data/models/rubro';
import { FORM_INFO_RUBRO } from './form_info_rubro';
import { RubroHelper } from '../../../helpers/rubros/rubroHelper';
import { PopUpManager } from '../../../managers/popUpManager';
import { TranslateService } from '@ngx-translate/core';
import { FormManager } from '../../../managers/formManager';
import { NodoRubro } from '../../../@core/data/models/nodo_rubro';



@Component({
  selector: 'ngx-rubros',
  templateUrl: './rubros.component.html',
  styleUrls: ['./rubros.component.scss'],
})
export class RubrosComponent implements OnInit {
  rubroSeleccionado: any;
  info_rubro: Rubro;
  insertarRubro = false;
  clean = false;
  formInfoRubro: any;
  rubroData: NodoRubro;

  vigencias: any[] = [
    {vigencia: 2019},
    {vigencia: 2017},
    {vigencia: 2016},
  ]

  listaProductosAsignados = [{ producto: { id: 1, Nombre: 'p1' }, porcentaje: 50 }, { producto: { id: 2, Nombre: 'p2' }, porcentaje: 30 }];

  @Input() optionPlanCuentas: string;
  @Output() eventChange = new EventEmitter();
  constructor(
    private translate: TranslateService,
    private rbHelper: RubroHelper,
    private popManager: PopUpManager,
  ) {
    this.formInfoRubro = FORM_INFO_RUBRO;
    this.construirForm();
    this.rubroSeleccionado = {
    };
    this.rubroData = {
      Vigencia: 0,
      Nombre: '',
      Descripcion: '',
      _Id: '',
      Hijos: null,
      Padre: '',
      UnidadEjecutora: '',
    };
  }

  ngOnInit() {
    this.info_rubro = {} as Rubro;
  }



  construirForm() {
    this.formInfoRubro.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formInfoRubro.campos.length; i++) {
      this.formInfoRubro.campos[i].label = this.formInfoRubro.campos[i].label_i18n;
      this.formInfoRubro.campos[i].placeholder = this.formInfoRubro.campos[i].label_i18n;
    }
  }

  receiveMessage($event) {
    this.rubroSeleccionado = <Rubro>$event
    this.rubroSeleccionado.Id = parseInt(this.rubroSeleccionado.Id, 0);
    this.rubroSeleccionado.UnidadEjecutora = parseInt(this.rubroSeleccionado.UnidadEjecutora, 0);

    const data = {
      RubroPadre: this.rubroSeleccionado.Codigo,
    }

    this.info_rubro = <Rubro>data;
    this.formInfoRubro.campos[FormManager.getIndexForm(this.formInfoRubro, 'Codigo')].prefix.value = this.rubroSeleccionado.Codigo + '-';

  }

  aniadirNodo() {
    this.insertarRubro = !this.insertarRubro;
    const data = {
      RubroPadre: this.rubroSeleccionado.Codigo || '',
    }
    this.info_rubro = <Rubro>data;
  }

  cleanForm() {
    this.clean = !this.clean;
    this.rubroSeleccionado = {};
    this.info_rubro = null;
    this.formInfoRubro.campos[FormManager.getIndexForm(this.formInfoRubro, 'Codigo')].prefix.value = '';

  }



  validarForm(event) {
    if (event.valid && this.rubroData.Vigencia !== 0) {
      this.rubroData.Vigencia = typeof this.rubroData.Vigencia === 'undefined' ? undefined : this.rubroData.Vigencia;
      this.rubroData.Nombre = typeof event.data.RubroHijo.Nombre === 'undefined' ? undefined : event.data.RubroHijo.Nombre;
      this.rubroData.Descripcion = typeof event.data.RubroHijo.Descripcion === 'undefined' ? undefined : event.data.RubroHijo.Descripcion ;
      this.rubroData._Id = typeof event.data.RubroHijo.Codigo === 'undefined' ? event.data.RubroHijo.Codigo + '' :
      String(this.rubroSeleccionado.Codigo + '-' + event.data.RubroHijo.Codigo);
      this.rubroData.Padre = typeof this.rubroSeleccionado.Codigo === 'undefined' ? undefined : String(this.rubroSeleccionado.Codigo);
            this.rbHelper.rubroRegister(this.rubroData).subscribe((res) => {
        if (res) {
          this.popManager.showSuccessAlert('Se registro el Rubro correctamente!');
          this.cleanForm()
          this.eventChange.emit(true);
        }
      });
    } else {
      this.popManager.showErrorAlert('Datos Incompletos');
    }
  }
  onSelect(selectedItem: any) {
    this.rubroData.Vigencia = selectedItem;
  }

  deleteRubro() {
    const id = this.rubroSeleccionado.Id;
    this.rbHelper.rubroDelete(id).subscribe((res) => {
      if (res) {
        this.popManager.showSuccessAlert('Se Eliminó el Rubro correctamente!');
        this.cleanForm()
        this.eventChange.emit(true);
      }
    });
  }

  cambioProductosAsignados(productosAsignados: any[]) {
    this.listaProductosAsignados = productosAsignados;
  }
};
