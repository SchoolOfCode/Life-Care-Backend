import pkg from 'pg';
const { Pool } = pkg;
export const pool = new Pool({
  connectionString: process.env.POSTGRESQL_CONNECTION_URL,
});

export function query(text, params) {
  return pool.query(text, params);
}
