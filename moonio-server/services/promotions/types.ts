import { Schema } from "mongoose";

export interface PromotionsInitRequest {}

export interface PromotionsInitResponse {
  count: number
}

export interface PromotionsGetSchemaRequest {}

export interface PromotionsGetSchemaResponse extends Schema {}
