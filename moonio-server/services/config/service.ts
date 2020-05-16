import { Context, ServiceSchema } from "moleculer";
import { ConfigFetchResponse } from "./types";
import { Schema } from "mongoose";

const Service: ServiceSchema = {
  name: "config",
  actions: {
    fetch: {
      async handler(ctx: Context): Promise<ConfigFetchResponse> {
        const schema: Schema = await ctx.call("promotions.get_schema");
        return {
          rowHeight: 48,
          headerHeight: 48,
          columns: Object
            .keys(schema.obj)
            .map((key: string) => ({
              label: key,
              dataKey: key
            }))
        };
      }
    }
  }
};

export = Service;
