import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbSortRequest } from '@nebular/theme';
import { RubroHelper } from '../../../helpers/rubros/rubroHelper';
import { NbCollectionViewer } from '@nebular/theme/components/cdk/collections';
import { CollectionViewer } from '@angular/cdk/collections';
interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface EstructuraArbolRubros {
  Nombre : string;
  Codigo : string;
}

@Component({
  selector: 'arbol',
  templateUrl: './arbol.component.html',
  styleUrls: ['./arbol.component.scss']
})
export class ArbolComponent {
  @Output() rubroSeleccionado = new EventEmitter();
  customColumn = 'Codigo';
  defaultColumns = [ 'Nombre'];
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  dataSource: NbTreeGridDataSource<EstructuraArbolRubros>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  
  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<EstructuraArbolRubros>) { 
    this.dataSource = this.dataSourceBuilder.create(this.data);

  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  async onSelect(selectedItem: any) {

    let fork: TreeNode<EstructuraArbolRubros>[] = [{ data: { Codigo: '1-1', Nombre: 'Rubro Hijo 1' }, children: [] }];
    selectedItem.children = fork;
    console.log("Rubro Seleccionado es: ", selectedItem.data);
    console.info(`data`, selectedItem)
    this.rubroSeleccionado.emit(selectedItem.data);

  }
  private data: TreeNode<EstructuraArbolRubros>[] = [
    {
      data: { Codigo: '1', Nombre: 'Rubro Padre'},
      children: [
        { data: { Codigo: '1-1', Nombre: 'Rubro Hijo 1' } },
        { data: { Codigo: '1-2', Nombre: 'Rubro Hijo 2' } },
        {
          data: { Codigo: '1-3', Nombre: 'Rubro Hijo 3' },
          children: [
            { data: { Codigo: '1-3-1', Nombre: 'Rubro Hijo 31' } },
            { data: { Codigo: '1-3-2', Nombre: 'Rubro Hijo 32' } },
            { data: { Codigo: '1-3-3', Nombre: 'Rubro Hijo 33' } },
          ],
        },
        { data: { Codigo: 'Projects', Nombre: '1.8 MB' } },
      ],
    },
    {
      data: { Codigo: 'Projects', Nombre: '1.8 MB' },
      children: [
        {
          data: { Codigo: 'Projects', Nombre: '1.8 MB' },
          children: [
            { data: { Codigo: 'Projects', Nombre: '1.8 MB' } },
          ],
        },
        {
          data: { Codigo: 'Projects', Nombre: '1.8 MB' },
          children: [
            { data: { Codigo: 'Projects', Nombre: '1.8 MB' } },
            { data: { Codigo: 'Projects', Nombre: '1.8 MB' } },
          ],
        },
      ],
    },
    {
      data: { Codigo: 'Projects', Nombre: '1.8 MB'},
      children: [
        { data: { Codigo: 'Projects', Nombre: '1.8 MB' } },
        { data: { Codigo: 'Projects', Nombre: '1.8 MB' } },
      ],
    },
  ];


  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}


@Component({
  selector: 'nb-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
    </ng-template>
  `,
})

export class FsIconAComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }

}
