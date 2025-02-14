import { Sequelize } from "sequelize";
import config from "./config.js";

const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  { host: "localhost", dialect: "mysql" }
);

await sequelize.authenticate().catch((err) => {
  console.error("Unable to connect to the database:", err.message);

  // Exit the process with a non-zero exit code.
  process.exit(1);
});

console.log("Connection has been established succesfully");

export default sequelize;
