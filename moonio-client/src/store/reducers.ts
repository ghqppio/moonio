import { combineReducers } from "redux";
import promotions from "./promotions/reducers";
import config from "./config/reducers";
import { PromotionsState } from "./promotions/types";
import { ConfigState } from "./config/types";

interface StoreState {}

export interface RootState extends StoreState {
  promotions: PromotionsState;
  config: ConfigState;
}

const rootReducer = combineReducers<RootState>({
  promotions,
  config,
});

export default rootReducer;
