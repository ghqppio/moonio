export interface ConfigFetchRequest {}

export interface ConfigFetchResponse {
  rowHeight: number,
  headerHeight: number,
  columns: Column[]
}

export interface Column {
  label: string,
  dataKey: string
}
