import { splitEvery } from "ramda";
import { ServiceSchema } from "moleculer";
import DbService from "moleculer-db";
import faker from "faker";
import MongooseAdapter from "moleculer-db-adapter-mongoose";
import PromotionModel from "../../models/promotion";
import config from "../../config";
import {
  PromotionsGetSchemaResponse,
  PromotionsInitResponse
} from "./types";

const Service: ServiceSchema = {
  name: "promotions",
  mixins: [DbService],

  adapter: new MongooseAdapter(`${config.mongo.url}/${config.mongo.database}`, {
    useNewUrlParser: true
  }),

  model: PromotionModel,

  actions: {
    init: {
      async handler(): Promise<PromotionsInitResponse> {
        const { chunk_size, count } = config.promotions;
        const promotions = new Array(count)
          .fill(null)
          .map(this.generatePromotion);

        await splitEvery(chunk_size, promotions)
          .reduce(async (prevPromise, chunk) => {
            await prevPromise;
            return this.adapter.insertMany(chunk);
          }, Promise.resolve());

        return {
          count: promotions.length
        };
      }
    },

    get_schema: {
      handler(): PromotionsGetSchemaResponse {
        return this.schema.model.schema;
      }
    }
  },

  methods: {
    generatePromotion() {
      return {
        name: faker.name.findName(),
        type: faker.database.type(),
        start_date: faker.date.recent(),
        end_date: faker.date.future(),
        user_group: faker.random.uuid()
      };
    }
  }
};

export = Service;
