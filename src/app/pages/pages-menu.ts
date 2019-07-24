import { MenuItem } from './menu-item';

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
    key: 'dashboard',
  },
  {
    title: 'plan-cuentas',
    icon: 'nb-snowy-circled',
    link: '/pages/plan-cuentas',
    home: false,
    key: 'plan-cuentas',
    children: [
      {
        title: 'gestion-plan-cuentas',
        link: '/pages/plan-cuentas/gestion-plan-cuentas',
        home: false,
        key: 'gestion-plan-cuentas',
      },
      {
        title: 'gestion-modificaciones',
        link: '/pages/plan-cuentas/gestion-modificaciones',
        home: false,
        key: 'gestion-modificaciones',
      },
      {
        title: 'tabla-crud',
        link: '/pages/plan-cuentas/tabla-crud',
        home: false,
        key: 'tabla-crud',
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
    title: 'plan-cuentas',
    icon: 'nb-snowy-circled',
    link: '/pages/plan-cuentas',
    home: false,
    key: 'plan-cuentas',
    children: [
      {
        title: 'gestion-plan-cuentas',
        link: '/pages/plan-cuentas/gestion-plan-cuentas',
        home: false,
        key: 'gestion-plan-cuentas',
      },
      {
        title: 'gestion-modificaciones',
        link: '/pages/plan-cuentas/gestion-modificaciones',
        home: false,
        key: 'gestion-modificaciones',
      },
      {
        title: 'tabla-crud',
        link: '/pages/plan-cuentas/tabla-crud',
        home: false,
        key: 'tabla-crud',
      },


    ],
  },

];
