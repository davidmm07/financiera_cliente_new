import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import {
  NbSortDirection,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
  NbSortRequest
} from "@nebular/theme";
import { RubroHelper } from "../../../helpers/rubros/rubroHelper";
import { NbCollectionViewer } from "@nebular/theme/components/cdk/collections";
import { CollectionViewer } from "@angular/cdk/collections";
import { Observable } from "rxjs";
import { ApropiacionHelper } from "../../../helpers/apropiaciones/apropiacionHelper";
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
  Nombre: string;
  Codigo: string;
  Descripcion: string;
  ApropiacionInicial: number;
}

@Component({
  selector: "arbol",
  templateUrl: "./arbol.component.html",
  styleUrls: ["./arbol.component.scss"]
})
export class ArbolComponent {
  @Output() rubroSeleccionado = new EventEmitter();
  @Input() updateSignal: Observable<string[]>;
  @Input() optionMessage: string;

  update: any;
  customColumn = "Codigo";
  defaultColumns = ["Nombre", "ApropiacionInicial"];
  allColumns = [this.customColumn, ...this.defaultColumns];
  dataSource: NbTreeGridDataSource<EstructuraArbolRubros>;
  dataSource2: NbTreeGridDataSource<EstructuraArbolRubrosApropiaciones>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<EstructuraArbolRubros>,
    private dataSourceBuilder2: NbTreeGridDataSourceBuilder<EstructuraArbolRubrosApropiaciones>,
    private rbHelper: RubroHelper,
    private apHelper: ApropiacionHelper
  ) {
    this.loadTree();
  }

  ngOnChanges(changes) {
    if (changes["updateSignal"] && this.updateSignal) {
      this.updateSignal.subscribe(() => {
        this.loadTree();
      });
    }
  }

  loadTree() {
    /*if(this.optionMessage === 'Rubros'){
  this.rbHelper.getFullArbol().subscribe((res) => {
      this.data = res;
      this.dataSource = this.dataSourceBuilder.create(this.data);
    });
  /* } else if (this.optionMessage === 'Apropiaciones'){

  } */
    this.apHelper.getFullArbol().subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.dataSource2 = this.dataSourceBuilder2.create(this.data);
    });
  }

  updateTreeSignal($event) {
    console.info("updated", $event);
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
  }
  private data: TreeNode<EstructuraArbolRubrosApropiaciones>[];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + nextColumnStep * index;
  }
}

@Component({
  selector: "nb-fs-icon",
  template: `
    <nb-tree-grid-row-toggle
      [expanded]="expanded"
      *ngIf="isDir(); else fileIcon"
    >
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon> </ng-template>
  `
})
export class FsIconAComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === "dir";
  }
}
