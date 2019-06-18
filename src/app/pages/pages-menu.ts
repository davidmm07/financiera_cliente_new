import { MenuItem } from './menu-item';

export const MENU_ITEMS: MenuItem[] = [
  {
    title:  'Dashboard',
    icon:  'nb-home',
    link:  '/pages/dashboard',
    home:  true,
    key:  'dashboard',
  },
  {
    title:  'Inscripcion',
    icon:  'nb-compose',
    link:  '/pages/inscripcion',
    key:  'inscripcion',
    children:  [
      {
        title:  'Posgrado',
        link:  '/pages/inscripcion/posgrado',
        key:  'inscripcion_posgrado',
      },
    ],
  },
  
];

export const MENU_PUBLICO: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
    key: 'dashboard',
  },
  {
    title: 'rubros',
    icon: 'nb-star',
    link: '/pages/rubros',
    home: false,
    key: 'rubros',
    children: [
      {
        title: 'consulta-rubros',
        link: '/pages/rubros/consulta-rubros',
        home: false,
        key: 'consulta-rubros',
      },]
  },
  {
    title: 'apropiaciones',
    icon: 'nb-snowy-circled',
    link: '/pages/apropiaciones',
    home: false,
    key: 'apropiaciones',
    children: [
      {
        title: 'consulta-apropiaciones-iniciales',
        link: '/pages/apropiaciones/consulta-apropiaciones-iniciales',
        home: false,
        key: 'consulta-apropiaciones-iniciales',
      },]
  },
  {
    title: 'plan-cuentas',
    icon: 'nb-snowy-circled',
    link: '/pages/plan-cuentas',
    home: false,
    key: 'plan-cuentas',
    children: [
      {
        title: 'RUB',
        link: '/pages/plan-cuentas/rubros',
        home: false,
        key: 'arbol',
      },
      {
        title: 'APR',
        link: '/pages/plan-cuentas/apropiaciones',
        home: false,
        key: 'consulta',
      },
      {
        title: 'gestion-plan-cuentas',
        link: '/pages/plan-cuentas/gestion-plan-cuentas',
        home: false,
        key: 'gestion-plan-cuentas',
      },

    ]
  },
];
