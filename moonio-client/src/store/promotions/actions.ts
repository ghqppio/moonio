import axios from "axios";
import { Dispatch } from "redux";
import {
  actionTypes,
  FetchPromotionsParams,
  Fetch,
  FetchSuccess,
  FetchError,
} from "./types";

console.log(process.env)
export const initPromotions: any = () => {
  return (dispatch: Dispatch): Fetch => {
    axios.get(`${process.env.REACT_APP_API_URL}/promotions/init`).then(() => {
      window.location.reload();
    });

    return dispatch({
      type: actionTypes.FETCH_REQUEST,
    });
  };
};

export const fetchPromotions: any = (params: FetchPromotionsParams) => {
  return (dispatch: Dispatch): Fetch => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/promotions/list`, {
        params,
      })
      .then(
        (response): FetchSuccess => {
          return dispatch({
            type: actionTypes.FETCH_SUCCESS,
            payload: response.data,
          });
        }
      )
      .catch(
        (error: Error): FetchError => {
          return dispatch({
            type: actionTypes.FETCH_ERROR,
            payload: error.message,
          });
        }
      );

    return dispatch({
      type: actionTypes.FETCH_REQUEST,
    });
  };
};
