import { RequestManager } from '../../managers/requestManager';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class RubroHelper {

    constructor(private rqManager: RequestManager){
        rqManager.setPath('PLAN_CUENTAS_MID_SERVICE');
    }

    /**
     * getArbol
     */
    public getArbol(unidadEjecutora: number, branch?: string) {
        // Set the optional branch for the API request.
        const params = {
            rama: branch
        };
        // call request manager for the tree's data.
        return this.rqManager.get('v1/rubro/ArbolRubros/' + unidadEjecutora.toString(), params);

    }

    /**
     * rubroRegister
     */
    public rubroRegister(rubroData) {
       
        return this.rqManager.post(`v1/rubro/RegistrarRubro`, rubroData);

    }

    /**
     * rubroRegister
     */
    public rubroDelete(id: number) {
       
        return this.rqManager.delete(`v1/rubro/EliminarRubro`, id);

    }
}