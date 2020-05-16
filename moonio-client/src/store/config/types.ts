export enum actionTypes {
  FETCH_REQUEST = "@@config/FETCH",
  FETCH_SUCCESS = "@@config/FETCH_SUCCESS",
  FETCH_ERROR = "@@config/FETCH_ERROR",
}
export interface Column {
  width: number;
  label: string;
  dataKey: string;
  type: string;
}

export interface Config {
  rowHeight: number;
  headerHeight: number;
  columns: Column[];
}

export interface ConfigState {
  readonly data: Config;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error?: boolean | Error;
}

export interface Fetch {
  type: actionTypes.FETCH_REQUEST;
}

export interface FetchSuccess {
  type: actionTypes.FETCH_SUCCESS;
  payload: Config;
}

export interface FetchError {
  type: actionTypes.FETCH_ERROR;
  payload: Error;
}

export type ConfigActionsTypes = Fetch | FetchSuccess | FetchError;
