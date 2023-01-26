import { query } from "../db/index.js";

export async function getAllCarers() {
  const results = await query("SELECT * FROM carers");
  const carersArr = results.rows;
  return carersArr;
}

export async function getCarerByID(id) {
  const results = await query("SELECT * FROM carers WHERE carer_id = $1;", [
    id,
  ]);
  const carer = results.rows[0];
  return carer;
}

export async function getPatientsByCarerID(carer_id) {
  const results = await query(
    // `SELECT *
    // FROM patients
    // LEFT JOIN carers
    // ON patients.carer_id = carers.id
    // WHERE carers.id = $1;`,
    // [carer_id]

    // !Below is SQL Query for if we use the junction table

    `SELECT pat.*
    FROM carer_patients AS cp
    JOIN patients AS pat 
    ON cp.patient_id = pat.patient_id
    WHERE cp.carer_id = $1;`,
    [carer_id]
  );
  const patientsArr = results.rows;
  return patientsArr;
}
