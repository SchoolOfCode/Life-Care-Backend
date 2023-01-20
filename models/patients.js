import { query } from "../db/index.js";

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
    `SELECT notes.*, carers.first_name, carers.last_name
    FROM notes 
    LEFT JOIN carers 
    ON notes.carer_id = carers.carer_id
    WHERE carers.carer_id = $1;`,
    [patient_id]
  );
  const notesArr = results.rows;
  return notesArr;
}

/**
 Return an object with the inserted values
 */
export async function addNote(NoteObj) {
  const result = await query(
    `INSERT INTO notes (patient_id, carer_id, content, incidents, additional, time_stamp) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [
      NoteObj.patient_id,
      NoteObj.carer_id,
      NoteObj.content,
      NoteObj.incidents,
      NoteObj.additional,
      NoteObj.time_stamp,
    ]
  );
  // const newNoteObj = {
  //   patient_id: 1,
  //   carer_id: 1,
  //   text_content: `This is a note`,
  //   type_note: `Incident`,
  //   time_of_input: `2023/01/12`,
  //   has_been_seen: true,
  // };

  const newNoteObj = result.rows[0];
  return newNoteObj;
}
