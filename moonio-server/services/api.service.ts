import { ServiceSchema } from "moleculer";
import ApiGateway = require("moleculer-web");

const ApiService: ServiceSchema = {
  name: "api",

  mixins: [ApiGateway],

  settings: {
    port: process.env.SERVER_PORT,

    cors: {
      origin: "*",
      methods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"]
    },

    routes: [
      {
        path: "/api",
        whitelist: [
          "**"
        ]
      }
    ]
  },
  async started() {
    console.log(`Server started on port: ${process.env.SERVER_PORT}`);
  }
};

export = ApiService;
