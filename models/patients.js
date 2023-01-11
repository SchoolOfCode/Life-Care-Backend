import { query } from '../db/index.js';

export async function getPatientByID(id) {
  const results = await query(
    `SELECT * 
    FROM patients 
    WHERE patient_id = $1;`,
    [id]
  );
  const patient = results.rows[0];
  return patient;
}

export async function getPatientsByCarerID(carer_id) {
  console.log(carer_id);
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

export async function getNotesByPatientID(patient_id) {
  const results = await query(
    `SELECT type_note, text_content, time_of_input, has_been_seen
    FROM notes
    WHERE patient_id = $1;`,
    [patient_id]
  );
  const notesArr = results.rows;
  return notesArr;
}