import { Component, OnInit } from '@angular/core';
import { FORM_INFO_RUBRO } from './form_info_rubro';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'fuentes',
  templateUrl: './fuentes.component.html',
  styleUrls: ['./fuentes.component.scss']
})
export class FuentesComponent implements OnInit {
  formInfoRubro: any;
  constructor(private translate: TranslateService,) { 
    this.formInfoRubro = FORM_INFO_RUBRO;
    this.construirForm();
  }

  ngOnInit() {
  }

  construirForm() {
    this.formInfoRubro.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formInfoRubro.campos.length; i++) {
      this.formInfoRubro.campos[i].label = this.formInfoRubro.campos[i].label_i18n;
      this.formInfoRubro.campos[i].placeholder = this.formInfoRubro.campos[i].label_i18n;
    }
  }

}
