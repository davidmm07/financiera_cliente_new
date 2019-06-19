import { RequestManager } from '../../managers/requestManager';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class RubroHelper {

    constructor(private rqManager: RequestManager) { }

    /**
     * getArbol
     */
    public getArbol(branch?: string) {
        this.rqManager.setPath('PLAN_CUENTAS_MID_SERVICE');
        // Set the optional branch for the API request.
        const unidadEjecutora = 1;
        const params = {
            rama: branch,
        };
        // call request manager for the tree's data.
        return this.rqManager.get(`v1/rubro/ArbolRubros/${unidadEjecutora.toString()}`, params);

    }

    /**
     * rubroRegister
     */
    public rubroRegister(rubroData) {
        this.rqManager.setPath('PLAN_CUENTAS_MID_SERVICE');
        return this.rqManager.post(`v1/rubro/RegistrarRubro`, rubroData);

    }

    /**
     * rubroRegister
     */
    public rubroDelete(id: number) {
        this.rqManager.setPath('PLAN_CUENTAS_MID_SERVICE');
        return this.rqManager.delete(`v1/rubro/EliminarRubro`, id);

    }

    /**
     * rubroUpdate
     */
    public rubroUpdate(rubroData) {
        this.rqManager.setPath('PLAN_CUENTAS_MID_SERVICE');
        return this.rqManager.put(`v1/rubro/`, rubroData);

    }
}