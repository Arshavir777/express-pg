import { DB_CONDITIONS } from "../constants/db";
import db from "../db";
export const FIELDS = ["id", "name", "email"];

const findAndCountAll = async ({ limit, offset, filter, sort }) => {
  let orderQuery = "";
  let whereQuery = "";

  if (filter) {
    let { field, condition, value } = filter;
    if (condition === DB_CONDITIONS.CONTAIN) {
      whereQuery += `WHERE "${field}" like '%${value}%'`;
    } else {
      whereQuery += `WHERE "${field}"${condition}'${value}'`;
    }
  }

  if (sort) {
    const [field, order] = Object.entries(sort)[0];
    orderQuery += `ORDER BY "${field}" ${order}`;
  }

  const { rows: allRows } = await db.query(
    `SELECT count(*) FROM items ${whereQuery}`
  );

  const { rows } = await db.query(
    `SELECT * FROM items ${whereQuery} ${orderQuery} LIMIT $1 OFFSET $2`,
    [limit, offset]
  );

  return { rows, total: +allRows[0]?.count || 0 };
};

const insert = async (data) => {
  const { rows } = await db.query(
    "INSERT INTO items(name, email) VALUES($1, $2) RETURNING *",
    [data.name, data.email]
  );

  return rows[0];
};

export { findAndCountAll, insert };
