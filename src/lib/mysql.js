import mysql from "serverless-mysql";

export const db = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "1475963258Berserker*",
    port: 3306,
    database: "proveedores",
  },
});
