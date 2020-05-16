export enum actionTypes {
  FETCH_REQUEST = "@@promotions/FETCH",
  FETCH_SUCCESS = "@@promotions/FETCH_SUCCESS",
  FETCH_ERROR = "@@promotions/FETCH_ERROR",
}

export interface Promotion {
  [key: string]: string | number | Date
}

export interface PromotionsState {
  readonly rows: Promotion[];
  readonly page: number;
  readonly pageSize: number;
  readonly total: number;
  readonly totalPages: number;
  readonly loaded: boolean;
  readonly loading: boolean;
  readonly error?: boolean | string;
}

export interface FetchPromotionsParams {
  readonly page?: number;
  readonly pageSize?: number;
}

export interface Fetch {
  type: actionTypes.FETCH_REQUEST;
  payload?: {};
}

export interface FetchSuccess {
  type: actionTypes.FETCH_SUCCESS;
  payload: {
    rows: Promotion[];
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

export interface FetchError {
  type: actionTypes.FETCH_ERROR;
  payload: string;
}

export type PromotionActionsTypes = Fetch | FetchSuccess | FetchError;
