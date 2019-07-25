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
        children: [
          {
            title: 'rubros',
            link: '/pages/plan-cuentas/rubros',
            home: false,
            key: 'rubros',
          },
          {
            title: 'apropiaciones',
            link: '/pages/plan-cuentas/apropiaciones',
            home: false,
            key: 'apropiaciones',
          },
          {
            title: 'fuentes',
            link: '/pages/plan-cuentas/fuentes',
            home: false,
            key: 'fuentes',
          },
        ],
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
        children: [
          {
            title: 'rubros',
            link: '/pages/plan-cuentas/rubros',
            home: false,
            key: 'rubros',
          },
          {
            title: 'apropiaciones',
            link: '/pages/plan-cuentas/apropiaciones',
            home: false,
            key: 'apropiaciones',
          },
          {
            title: 'fuentes',
            link: '/pages/plan-cuentas/fuentes',
            home: false,
            key: 'fuentes',
          },
          {
            title: 'productos',
            link: '/pages/plan-cuentas/productos',
            home: false,
            key: 'productos',
          },
        ],
      },
      {
        title: 'gestion-modificaciones',
        link: '/pages/plan-cuentas/gestion-modificaciones',
        home: false,
        key: 'gestion-modificaciones',
      },
    ],
  },

];
