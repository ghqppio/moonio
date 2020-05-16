import { mergeDeepRight } from "ramda";
import { Reducer } from "redux";
import { PromotionsState, PromotionActionsTypes, actionTypes } from "./types";

const initialState: PromotionsState = {
  rows: [],
  page: 1,
  pageSize: 100,
  total: 0,
  totalPages: 0,
  loaded: false,
  loading: false,
  error: false,
};

const reducer: Reducer<PromotionsState, PromotionActionsTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST: {
      return mergeDeepRight(state, {
        loading: true,
      });
    }

    case actionTypes.FETCH_SUCCESS: {
      return mergeDeepRight(state, {
        loading: false,
        loaded: true,
        ...action.payload,
        rows: state.rows.concat(action.payload.rows),
      });
    }

    case actionTypes.FETCH_ERROR: {
      return mergeDeepRight(state, {
        loading: false,
        error: action.payload,
      });
    }

    default:
      return state;
  }
};

export default reducer;
