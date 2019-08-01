import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import {
  NbSortDirection,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
  NbSortRequest,
} from '@nebular/theme';
import { RubroHelper } from '../../../helpers/rubros/rubroHelper';
import { Observable } from 'rxjs';
import { ApropiacionHelper } from '../../../helpers/apropiaciones/apropiacionHelper';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface EstructuraArbolRubros {
  Nombre: string;
  Codigo: string;
  Descripcion: string;
}

interface EstructuraArbolRubrosApropiaciones {
  Codigo: string;
  Descripcion: string;
  ApropiacionInicial: number;
  Hijos: string[];
  Movimientos: string[];
  Padre: string;
  UnidadEjecutora: number;
  Estado: string;
  _Id: string;
}

@Component({
  selector: 'ngx-arbol',
  templateUrl: './arbol.component.html',
  styleUrls: ['./arbol.component.scss'],
})
export class ArbolComponent implements OnChanges {
  @Output() rubroSeleccionado = new EventEmitter();
  @Input() updateSignal: Observable<string[]>;
  @Input() optionSelect: string;
  opcionSeleccionada: string;

  update: any;
  customColumn = 'Codigo';
  defaultColumns = ['Nombre'];

  allColumns = [this.customColumn, ...this.defaultColumns];
  dataSource: NbTreeGridDataSource<EstructuraArbolRubros>;
  dataSource2: NbTreeGridDataSource<EstructuraArbolRubrosApropiaciones>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<EstructuraArbolRubros>,
    private dataSourceBuilder2: NbTreeGridDataSourceBuilder<EstructuraArbolRubrosApropiaciones>,
    private rbHelper: RubroHelper,
    private apHelper: ApropiacionHelper ) {
  }
  ngOnChanges(changes) {
    if (changes.optionSelect !== undefined) {
      if (changes.optionSelect.currentValue !== undefined) {
        this.opcionSeleccionada = changes.optionSelect.currentValue;
        // console.info(this.opcionSeleccionada)
        this.loadTree();
      }
    }
    if (changes['updateSignal'] && this.updateSignal) {
      this.updateSignal.subscribe(() => {
        this.loadTree();
      });
    }
  }

  // private data: TreeNode<EstructuraArbolRubrosApropiaciones>[] | TreeNode<EstructuraArbolRubros>[];

  private data: TreeNode<EstructuraArbolRubrosApropiaciones>[];
  loadTreeRubros() {
    this.rbHelper.getFullArbol().subscribe((res) => {
      this.data = res;
      this.dataSource = this.dataSourceBuilder.create(this.data);
    });
  }


  loadTreeApropiaciones() {
    this.customColumn = '_id';
    this.defaultColumns = [  'Nombre', 'ApropiacionInicial' ]
    this.allColumns = [this.customColumn, ...this.defaultColumns];
    this.apHelper.getFullArbol().subscribe( res => {
      this.data = res;
      // console.info(this.data);
      this.dataSource2 = this.dataSourceBuilder2.create(this.data);
    },
    );
  }

  loadTree() {
    // console.info(this.opcionSeleccionada);
    // console.info(this.optionSelect);
    if (this.opcionSeleccionada === 'Rubros' ) {
        this.loadTreeRubros();
    } else if ( this.opcionSeleccionada === 'Apropiaciones' ) {
        this.loadTreeApropiaciones();
    }
  }
  updateTreeSignal($event) {
    console.info('updated', $event);
    this.loadTree();
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
    this.rubroSeleccionado.emit(selectedItem.data);
    console.info(selectedItem);
  }
  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + nextColumnStep * index;
  }
}
@Component({
  selector: 'ngx-nb-fs-icon',
  template: `
    <nb-tree-grid-row-toggle
      [expanded]="expanded"
      *ngIf="isDir(); else fileIcon"
    >
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon> </ng-template>
  `,
})
export class FsIconAComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }
}
