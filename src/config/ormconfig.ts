import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "mydatabase",
  entities: [__dirname + "/../entity/**/*.ts"],
  synchronize: true,
  logging: true,
};

export default config;
