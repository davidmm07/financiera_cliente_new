import { Component, OnInit } from "@angular/core";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

@Component({
  selector: "gestion-plan-cuentas",
  templateUrl: "./gestion-plan-cuentas.component.html",
  styleUrls: ["./gestion-plan-cuentas.component.scss"]
})
export class GestionPlanCuentasComponent implements OnInit {
  tabs: any[] = [
    {
      title: "Rubros",
      route: "/pages/plan-cuentas/rubros"
    },
    {
      title: "Apropiaciones",
      route: "/pages/plan-cuentas/apropiaciones"
    },
    {
      title: "fuentes",
      route: "/pages/plan-cuentas/fuentes"
    }
  ];

  selectedOption: any;
  VigenciaActual: any;
  op_plan_cuentas: any[] = [
    { option: "Rubros" },
    { option: "Apropiaciones" },
    { option: "Fuentes de Financiamiento" }
  ];
  vigencias: any[] = [
    { vigencia: 2019 },
    { vigencia: 2017 },
    { vigencia: 2016 }
  ];

  constructor(private translate: TranslateService) {
    this.selectedOption = "";
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {});
  }

  ngOnInit() {}

  useLanguage(language: string) {
    this.translate.use(language);
  }

  onSelect(selectedItem: any) {
    console.log("Opcion Seleccionada es: ", selectedItem);
  }

  onChangeTab($event){
    console.log($event.tabTitle);
    this.selectedOption=$event.tabTitle;
  }
}

// definicion de tabs
