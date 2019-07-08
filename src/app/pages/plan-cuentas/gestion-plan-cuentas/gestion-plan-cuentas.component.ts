import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'gestion-plan-cuentas',
  templateUrl: './gestion-plan-cuentas.component.html',
  styleUrls: ['./gestion-plan-cuentas.component.scss']
})
export class GestionPlanCuentasComponent implements OnInit {
  selectedOption : any;
  op_plan_cuentas: any[] = [
    { option: 'Rubros' },
    { option: 'Apropiaciones' },
    { option: 'Fuentes de Financiamiento' }];

  constructor(private translate: TranslateService,) {
    this.selectedOption = '';
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    });
   }

  ngOnInit() {
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  onSelect(selectedItem: any) {
    console.log("Opcion Seleccionado es: ", selectedItem , this.selectedOption); 
   }
}
