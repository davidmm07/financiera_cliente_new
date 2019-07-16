
import {map, multicast} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Subject ,  from } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { environment } from '../../../environments/environment';
import { ImplicitAutenticationService } from './implicit_autentication.service';
import { ConfiguracionService } from './../data/configuracion.service';

const CHAT_URL = environment.NOTIFICACION_SERVICE;

@Injectable()
export class NotificacionesService {
    public messagesSubject: Subject<any>;
    listMessage: any;
    payload: any;
    token: any;

    private noNotifySubject = new Subject();
    noNotify$ = this.noNotifySubject.asObservable();

    private arrayMessagesSubject = new Subject();
    arrayMessages$ = this.arrayMessagesSubject.asObservable();
    private _messages = this.arrayMessages$.pipe(multicast(this.arrayMessagesSubject));
    public getMessages() {
        return this._messages;
    }

    constructor(
        private confService: ConfiguracionService,
        private autenticacion: ImplicitAutenticationService,
    ) {
        this.listMessage = [];
        this.token = (JSON.parse(atob(localStorage.getItem("id_token").split(".")[1])).role).map((data: any) => (data.replace("/", "_")));
        this.connect();
        if (this.autenticacion.live()) {
            this.queryNotification(this.token);
        }



    }
    connect(){
        if (this.autenticacion.live()) {
            this.payload = this.autenticacion.getPayload();
            this.messagesSubject = webSocket(`${CHAT_URL}?id=${this.payload.sub}&profiles=${this.token}`);
            this.messagesSubject
                .pipe(
                    map((msn) => {
                        this.listMessage = [...[msn], ...this.listMessage];
                        this.noNotifySubject.next(this.listMessage.length);
                        this.arrayMessagesSubject.next(this.listMessage);
                        return msn
                    }),
                )
                .subscribe(
                    (msg: any) => console.info('Nueva notificación', msg),
                    err => {
                        console.info(err);
                        this.connect();
                    },
                    () => console.info('complete'),
                );
        }
    }

    close() {
        this.messagesSubject.unsubscribe();
    }

    addMessage(message) {
        this.listMessage = [...[message], ...this.listMessage];
        console.info(this.listMessage);
        this.noNotifySubject.next(this.listMessage.length);
        this.arrayMessagesSubject.next(this.listMessage);
    }
    queryNotification(profile) {
        this.confService.get('notificacion_estado_usuario?query=Usuario:' + this.payload.sub + ',Activo:true&sortby=id&order=asc&limit=-1')
            .subscribe((resp: any) => {
                if (resp !== null) {
                    from(resp)
                        .subscribe((notify: any) => {
                            const message = {
                                Type: notify.Notificacion.NotificacionConfiguracion.Tipo.Id,
                                Content: JSON.parse(notify.Notificacion.CuerpoNotificacion),
                                User: notify.Notificacion.NotificacionConfiguracion.Aplicacion.Nombre,
                                FechaCreacion: new Date(notify.Notificacion.FechaCreacion),
                                FechaEdicion: new Date(notify.Fecha),
                                Estado: notify.NotificacionEstado.CodigoAbreviacion,
                            };
                            this.addMessage(message);
                        });
                }

            });    
    }
}
