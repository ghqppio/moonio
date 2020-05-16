import Joi from "joi";
import { Config } from "./types";

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(["development", "production", "test", "provision"])
    .default("development"),

  MONGO_URL: Joi.string().required(),
  MONGO_DATABASE: Joi.string().required(),

  PROMOTIONS_COUNT: Joi.string().required(),
  PROMOTIONS_CHUNK_SIZE: Joi.string().required()
})
  .unknown()
  .required();

const { error, value } = Joi.validate(process.env, envVarsSchema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config: Config = {
  mongo: {
    url: value.MONGO_URL,
    database: value.MONGO_DATABASE,
  },
  promotions: {
    count: parseInt(value.PROMOTIONS_COUNT),
    chunk_size: parseInt(value.PROMOTIONS_CHUNK_SIZE)
  }
};
export default config;
