import { Promotion, FetchPromotionsParams } from "../../store/promotions/types";
import { Config } from "../../store/config/types";

export interface PromotionsPageProps {
  config: Config;
  promotions: Promotion[];
  page: number;
  pageSize: number;
  totalPages: number;
  loading: boolean;
  loaded: boolean;
  error?: boolean | string;
  fetchPromotions: (data: FetchPromotionsParams) => void;
  initPromotions: () => void;
  fetchConfig: () => void;
}

export interface PromotionsPageState {}
