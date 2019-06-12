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
    icon: 'nb-home',
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
    icon: 'nb-home',
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
];
