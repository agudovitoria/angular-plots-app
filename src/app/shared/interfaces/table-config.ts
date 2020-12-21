export interface TableConfig {
  displayedColumns: string[],
  columns: TableColumn,
  afterClientPath: string
}

export interface ColumnConfig {
  header: string,
  sortable?: boolean,
  sortKey?: string,
  valueFn?(source: any): string
}

interface TableColumn {
  [index: string]: ColumnConfig;
}
