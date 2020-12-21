export interface ToolbarConfig {
  canCreate: boolean,
  canDownload: boolean,
  canSearch: boolean,
  canFilter: boolean,
  searchOptions?: SearchOptions
}

export interface SearchOptions {
  debounce: number,
  placeholder: string
}
