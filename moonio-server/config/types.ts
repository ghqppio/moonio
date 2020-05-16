export interface Config {
  mongo: {
    url: string;
    database: string;
  },
  promotions: {
    count: number,
    chunk_size: number
  }
}
