import db from "../db";
import { DB_CONDITIONS } from "../constants/db";
const FIELDS = ["title", "quantity", "distance", "date"];

const findAndCountAll = async ({ limit, offset, filter, sort }) => {
  let orderQuery = "";
  let whereQuery = "";

  if (filter) {
    let { field, condition, value } = filter;
    if (condition === DB_CONDITIONS.CONTAINS) {
      whereQuery += `WHERE "${field}" LIKE '%${value}%'`;
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
    "INSERT INTO items(title, quantity, distance, date) VALUES($1::text, $2::int, $3::int, $4::date) RETURNING *",
    [data.title, data.quantity, data.distance, data.date]
  );

  return rows[0];
};

export { FIELDS, findAndCountAll, insert };
