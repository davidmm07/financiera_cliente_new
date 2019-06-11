import { Component, OnInit, Input } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbSortRequest } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  NombreRubro : string;
  CodigoRubro : string;
  /* name: string;
  size: string;
  kind: string;
  items?: number; */
}


@Component({
  selector: 'arbol-rubros',
  templateUrl: './arbol-rubros.component.html',
  styleUrls: ['./arbol-rubros.component.scss']
})
export class ArbolRubrosComponent{

  customColumn = 'CodigoRubro';
  defaultColumns = [ 'NombreRubro'];
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  
  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) { 
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

  private data: TreeNode<FSEntry>[] = [
    {
      data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB'},
      children: [
        { data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB' } },
        { data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB' } },
        {
          data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB' },
          children: [
            { data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB' } },
            { data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB' } },
            { data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB' } },
          ],
        },
        { data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB' } },
      ],
    },
    {
      data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB' },
      children: [
        {
          data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB' },
          children: [
            { data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB' } },
          ],
        },
        {
          data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB' },
          children: [
            { data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB' } },
            { data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB' } },
          ],
        },
      ],
    },
    {
      data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB'},
      children: [
        { data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB' } },
        { data: { CodigoRubro: 'Projects', NombreRubro: '1.8 MB' } },
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
export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }

}
