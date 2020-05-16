import axios from "axios";
import { Dispatch } from "redux";
import { actionTypes, Fetch, FetchSuccess, FetchError } from "./types";

export const fetchConfig: any = () => {
  return (dispatch: Dispatch): Fetch => {
    axios
      .request({
        url: `${process.env.REACT_APP_API_URL}/config/fetch`,
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
            payload: error,
          });
        }
      );

    return dispatch({
      type: actionTypes.FETCH_REQUEST,
    });
  };
};
