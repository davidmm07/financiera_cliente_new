import { RequestManager } from '../../managers/rubros/requestManager';
import { GENERAL } from '../../app-config';
export class RubroHelper {

    private rqManager = new RequestManager(GENERAL.ENTORNO.PLAN_CUENTAS_MID_SERVICE);

    /**
     * getArbol
     */
    public async getArbol(unidadEjecutora: number, branch?: string) {
        // Set the optional branch for the API request.
        const params = {
            rama: branch
        };
        // call request manager for the tree's data.
        return this.rqManager.get(params, unidadEjecutora.toString());

    }
}