import { Document, model, Schema } from "mongoose";

export interface IPromotion extends Document {
  name: string
  type: string
  start_date: Date
  end_date: Date
  user_group: string
}

const PromotionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  user_group: {
    type: String,
    required: true
  }
});

const Promotion = model<IPromotion>("Promotion", PromotionSchema);
export default Promotion;
