import { mergeDeepRight } from "ramda";
import { Reducer } from "redux";
import { ConfigState, ConfigActionsTypes, actionTypes } from "./types";

const initialState: ConfigState = {
  data: {
    rowHeight: 0,
    headerHeight: 0,
    columns: [],
  },
  loading: false,
  loaded: false,
  error: false,
};

const reducer: Reducer<ConfigState, ConfigActionsTypes> = (
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
        data: {
          ...action.payload,
          columns: action.payload.columns.map((column) =>
            mergeDeepRight(column, {
              width: 1 / action.payload.columns.length,
            })
          ),
        },
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
