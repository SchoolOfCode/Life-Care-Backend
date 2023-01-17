import { query } from '../db/index.js';

export async function getAllCarers() {
  const results = await query(
    'SELECT * FROM carers',
  );
  const carersArr = results.rows;
  return carersArr;
}

export async function getCarerByID(id) {
  const results = await query(
    'SELECT * FROM carers WHERE carer_id = $1;',
    [id]
    );
    const carer = results.rows[0];
    return carer;
}
  
