export let FORM_DEPENDENCIA_RUBRO = {
    titulo: 'DependenciaRubro',
    tipo_formulario: 'mini',
    btn: 'add-dependencia',
    alertas: true,
    modelo: 'DependenciaRubro',
    campos: [
      {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'dependencia',
        label: 'dependencia',
        placeholder: 'dependencia',
        requerido: true,
        tipo: 'Dependencia',
        key: 'Nombre',
        opciones: [],
      },
      {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Valor',
        label: 'valor',
        placeholder: 'valor',
        requerido: true,
        tipo: 'number',
      },
    ],
  }
