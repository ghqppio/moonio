import { Promotion } from "../../store/promotions/types";
import { Config } from "../../store/config/types";
import { ScrollEventData } from 'react-virtualized';

export interface PromotionsListProps extends Config {
  data: Promotion[];
  onScroll: (data: ScrollEventData) => void;
  onEdit?: (data: Promotion) => void;
  onDuplicate?: (data: Promotion) => void;
  onRemove?: (data: Promotion) => void;
  onSelect?: (data: Promotion, index: number) => void;
}

export interface PromotionsListState {}


