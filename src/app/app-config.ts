import { environment } from '../environments/environment';

export const Config = {
  LOCAL: {
NUXEO: {	       
        PATH: 'https://documental.udistrital.edu.co/nuxeo/',
    },
    WSO2_SERVICE: 'https://autenticacion.udistrital.edu.co/apioas',
    PLAN_CUENTAS_CRUD_SERVICE:'https://autenticacion.udistrital.edu.co/apioas/plan_cuentas_crud/v1',
    PLAN_CUENTAS_MID_SERVICE:'https://autenticacion.udistrital.edu.co/apioas/plan_cuentas_mid/v1',
    PLAN_CUENTAS_MONGO_SERVICE:'https://autenticacion.udistrital.edu.co/apioas/plan_cuentas_mongo_crud/v1',
    CONFIGURACION_SERVICE: 'https://autenticacion.udistrital.edu.co/apioas/configuracion_crud_api/v1/',
    NOTIFICACION_SERVICE: 'wss://autenticacion.udistrital.edu.co/apioas/notificacion_ws/v1/',
    CONF_MENU_SERVICE: 'https://autenticacion.udistrital.edu.co/apioas/configuracion_crud_api/v1/menu_opcion_padre/ArbolMenus/',
    TOKEN: {
      AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co/oauth2/authorize',
      CLIENTE_ID: 'TJ43YHyy3T29GrlTx9l0j7J7Cl8a',
      RESPONSE_TYPE: 'id_token token',
      SCOPE: 'openid email role',
      REDIRECT_URL: 'http://10.20.0.254/presupuesto_cliente/',
      SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
      SIGN_OUT_REDIRECT_URL: 'http://10.20.0.254/presupuesto_cliente/',
      REFRESH_TOKEN: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/token',
    },
  },
  PREPROD: {
    NUXEO: {
      PATH: 'https://documental.udistrital.edu.co/nuxeo/',
    },
    },
  },
  PROD: {
    NUXEO: {
      PATH: 'https://documental.udistrital.edu.co/nuxeo/',
    },
    },
  },
};

export const GENERAL = {
    ENTORNO: Config[environment.entorno],
};
