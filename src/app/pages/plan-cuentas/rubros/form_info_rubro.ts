export let FORM_INFO_RUBRO = {
    
    tipo_formulario: 'mini',
   
    alertas: true,
    modelo: 'infoRubro',
    campos: [
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'Codigo',
            label_i18n: 'Codigo',
            placeholder_i18n: 'Codigo',
            requerido: true,
            tipo: 'text',
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'UnidadEjecutora',
            label_i18n: 'Unidad Ejecutora',
            placeholder_i18n: 'Unidad Ejecutora',
            requerido: true,
            tipo: 'UnidadEjecutora',
            key: 'UnidadEjecutora',
            oopciones: [1,2,3],
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'Entidad',
            label_i18n: 'Entidad',
            placeholder_i18n: 'Entidad',
            requerido: true,
            tipo: 'Entidad',
            key: 'Entidad',
            oopciones: [1,2,3],
        },
      
        {
            etiqueta: 'textarea',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'Descripcion',
            label_i18n: 'Descripcion',
            placeholder_i18n: 'Descripcion',
            requerido: false,
            tipo: 'text',
        },
    ],
}
