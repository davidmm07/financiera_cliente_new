import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Idioma } from './../../../@core/data/models/idioma';
import { ClasificacionNivelIdioma } from './../../../@core/data/models/clasificacion_idioma';
import { NivelIdioma } from './../../../@core/data/models/nivel_idioma';
import { InfoIdioma } from './../../../@core/data/models/info_idioma';
import { FORM_IDIOMAS } from './form-idiomas';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { IdiomaService } from '../../../@core/data/idioma.service';
import { UserService } from '../../../@core/data/users.service';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';
import { HttpErrorResponse } from '@angular/common/http';
import { PeriodoAcademico } from './../../../@core/data/models/periodo_academico';
import { AdmisionesService } from '../../../@core/data/admisiones.service';

@Component({
  selector: 'ngx-crud-idiomas',
  templateUrl: './crud-idiomas.component.html',
})
export class CrudIdiomasComponent implements OnInit {
  config: ToasterConfig;
  info_idioma_id: number;
  ente: number;

  @Input('info_idioma_id')
  set name(info_idioma_id: number) {
    this.info_idioma_id = info_idioma_id;
    this.loadInfoIdioma();
  }

  @Output() eventChange = new EventEmitter();
  @Output('result') result: EventEmitter<any> = new EventEmitter();

  info_idioma: InfoIdioma;
  formInfoIdioma: any;
  regInfoIdioma: any;
  clean: boolean;
  temp: any;
  loading: boolean;
  percentage: number;
  periodo: PeriodoAcademico;
  idioma: number;

  constructor(
    private translate: TranslateService,
    private users: UserService,
    private idiomaService: IdiomaService,
    private admisionesService: AdmisionesService,
    private toasterService: ToasterService) {
    this.formInfoIdioma = FORM_IDIOMAS;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    this.loadOptionsIdiomas();
    this.loadOptionsNiveles()
    this.loadOptionsClasificacion()
    this.ente = this.users.getEnte();
    this.CargarPeriodo();
    this.loading = false;
  }

  construirForm() {
    // this.formInfoIdioma.titulo = this.translate.instant('GLOBAL.idiomas');
    this.formInfoIdioma.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formInfoIdioma.campos.length; i++) {
      this.formInfoIdioma.campos[i].label = this.translate.instant('GLOBAL.' + this.formInfoIdioma.campos[i].label_i18n);
      this.formInfoIdioma.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formInfoIdioma.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadOptionsIdiomas(): void {
    let idioma: Array<any> = [];
    this.idiomaService.get('idioma/?limit=0')
      .subscribe(res => {
        if (res !== null) {
          idioma = <Array<Idioma>>res;
        }
        this.formInfoIdioma.campos[this.getIndexForm('Idioma')].opciones = idioma;
      },
        (error: HttpErrorResponse) => {
          Swal({
            type: 'error',
            title: error.status + '',
            text: this.translate.instant('ERROR.' + error.status),
            footer: this.translate.instant('GLOBAL.cargar') + '-' +
              this.translate.instant('GLOBAL.idiomas') + '|' +
              this.translate.instant('GLOBAL.idioma'),
            confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
          });
        });
  }

  loadOptionsNiveles(): void {
    let nivel: Array<any> = [];
    this.idiomaService.get('valor_nivel_idioma/?limit=0')
      .subscribe(res => {
        if (res !== null) {
          nivel = <Array<NivelIdioma>>res;
        }
        this.formInfoIdioma.campos[this.getIndexForm('NivelEscribe')].opciones = nivel;
        this.formInfoIdioma.campos[this.getIndexForm('NivelEscucha')].opciones = nivel;
        this.formInfoIdioma.campos[this.getIndexForm('NivelHabla')].opciones = nivel;
        this.formInfoIdioma.campos[this.getIndexForm('NivelLee')].opciones = nivel;
      },
        (error: HttpErrorResponse) => {
          Swal({
            type: 'error',
            title: error.status + '',
            text: this.translate.instant('ERROR.' + error.status),
            footer: this.translate.instant('GLOBAL.cargar') + '-' +
              this.translate.instant('GLOBAL.idiomas') + '|' +
              this.translate.instant('GLOBAL.nivel'),
            confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
          });
        });
  }

  loadOptionsClasificacion(): void {
    let clasificacion: Array<any> = [];
    this.idiomaService.get('clasificacion_nivel_idioma/?limit=0')
      .subscribe(res => {
        if (res !== null) {
          clasificacion = <Array<ClasificacionNivelIdioma>>res;
        }
        this.formInfoIdioma.campos[this.getIndexForm('ClasificacionNivelIdioma')].opciones = clasificacion;
      },
        (error: HttpErrorResponse) => {
          Swal({
            type: 'error',
            title: error.status + '',
            text: this.translate.instant('ERROR.' + error.status),
            footer: this.translate.instant('GLOBAL.cargar') + '-' +
              this.translate.instant('GLOBAL.idiomas') + '|' +
              this.translate.instant('GLOBAL.clasificacion_nivel_idioma'),
            confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
          });
        });
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formInfoIdioma.campos.length; index++) {
      const element = this.formInfoIdioma.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }

  public loadInfoIdioma(): void {
    this.loading = true;
    if (this.info_idioma_id !== undefined && this.info_idioma_id !== 0 &&
      this.info_idioma_id.toString() !== '') {
      this.idiomaService.get('conocimiento_idioma/?query=id:' + this.info_idioma_id)
        .subscribe(res => {
          if (res !== null) {
            console.info(JSON.stringify(res));
            this.info_idioma = <InfoIdioma>res[0];
            this.idioma = this.info_idioma.Idioma.Id;
            this.loading = false;
          }
        },
          (error: HttpErrorResponse) => {
            Swal({
              type: 'error',
              title: error.status + '',
              text: this.translate.instant('ERROR.' + error.status),
              footer: this.translate.instant('GLOBAL.cargar') + '-' +
                this.translate.instant('GLOBAL.idioma'),
              confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
            });
          });
    } else {
      this.info_idioma = undefined;
      this.idioma = undefined;
      this.clean = !this.clean;
      this.loading = false;
    }
  }

  updateInfoIdioma(infoIdioma: any): void {
    const opt: any = {
      title: this.translate.instant('GLOBAL.actualizar'),
      text: this.translate.instant('GLOBAL.actualizar') + '?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
      confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
      cancelButtonText: this.translate.instant('GLOBAL.cancelar'),
    };
    Swal(opt)
      .then((willDelete) => {
        if (willDelete.value) {
          this.loading = true;
          this.info_idioma = <InfoIdioma>infoIdioma;
          this.idiomaService.put('conocimiento_idioma', this.info_idioma)
            .subscribe(res => {
              this.loading = false;
              this.eventChange.emit(true);
              this.showToast('info', this.translate.instant('GLOBAL.actualizar'),
                this.translate.instant('GLOBAL.idioma') + ' ' +
                this.translate.instant('GLOBAL.confirmarActualizar'));
              this.clean = !this.clean;
              this.info_idioma_id = 0;
              this.loadInfoIdioma();
            },
              (error: HttpErrorResponse) => {
                this.loading = false;
                Swal({
                  type: 'error',
                  title: error.status + '',
                  text: this.translate.instant('ERROR.' + error.status),
                  footer: this.translate.instant('GLOBAL.actualizar') + '-' +
                    this.translate.instant('GLOBAL.idioma'),
                  confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
                });
              });
        }
      });
  }

  createInfoIdioma(infoIdioma: any): void {
    const opt: any = {
      title: this.translate.instant('GLOBAL.crear'),
      text: this.translate.instant('GLOBAL.crear') + '?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
      confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
      cancelButtonText: this.translate.instant('GLOBAL.cancelar'),
    };
    Swal(opt)
      .then((willDelete) => {
        this.loading = true;
        if (willDelete.value) {
          this.info_idioma = <InfoIdioma>infoIdioma;
          this.info_idioma.Persona = this.users.getEnte();
          this.idiomaService.post('conocimiento_idioma', this.info_idioma)
            .subscribe(res => {
              const r = <any>res;
              // this.info_idioma = <InfoIdioma>res;
              if (r !== null && r.Type !== 'error') {
                this.loading = false;
                this.eventChange.emit(true);
                this.showToast('info', this.translate.instant('GLOBAL.crear'),
                  this.translate.instant('GLOBAL.idioma') + ' ' +
                  this.translate.instant('GLOBAL.confirmarCrear'));
                  this.clean = !this.clean;
              } else {
                this.showToast('error', this.translate.instant('GLOBAL.error'),
                  this.translate.instant('GLOBAL.error'));
              }
            },
              (error: HttpErrorResponse) => {
                Swal({
                  type: 'error',
                  title: error.status + '',
                  text: this.translate.instant('ERROR.' + error.status),
                  footer: this.translate.instant('GLOBAL.crear') + '-' +
                    this.translate.instant('GLOBAL.idioma'),
                  confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
                });
              });
        }
      });
  }

  ngOnInit() {
    this.loadInfoIdioma();
  }

  setPercentage(event) {
    this.percentage = event;
    this.result.emit(this.percentage);
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_idioma === undefined) {
        this.createInfoIdioma(event.data.InfoIdioma);
      } else {
        this.updateInfoIdioma(event.data.InfoIdioma);
      }
      this.result.emit(event);
    }
  }

  CargarPeriodo(): void {
    this.admisionesService.get('periodo_academico/?query=Activo:true&sortby=Id&order=desc&limit=1')
      .subscribe(res => {
        const r = <any>res;
        if (res !== null && r.Type !== 'error') {
          this.periodo = <PeriodoAcademico>res[0]; // se carga el periodo academico activo mas reciente
          // console.info(this.periodo);
        }
      },
        (error: HttpErrorResponse) => {
          Swal({
            type: 'error',
            title: error.status + '',
            text: this.translate.instant('ERROR.' + error.status),
            footer: this.translate.instant('GLOBAL.cargar') + '-' +
              this.translate.instant('GLOBAL.idiomas') + '|' +
              this.translate.instant('GLOBAL.periodo_academico'),
            confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
          });
        });
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      // 'toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center'
      positionClass: 'toast-top-center',
      timeout: 5000,  // ms
      newestOnTop: true,
      tapToDismiss: false, // hide on click
      preventDuplicates: true,
      animation: 'slideDown', // 'fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'
      limit: 5,
    });
    const toast: Toast = {
      type: type, // 'default', 'info', 'success', 'warning', 'error'
      title: title,
      body: body,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }
}
