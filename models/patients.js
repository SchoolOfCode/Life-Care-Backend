import { query } from "../db/index.js";

<<<<<<< HEAD
=======
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
    `SELECT content, incidents, additional, time_stamp, seen
    FROM notes
    WHERE patient_id = $1;`,
    [patient_id]
  );
  const notesArr = results.rows;
  return notesArr;
}

>>>>>>> 135b7f45fc97668620f56bf05f216c77322f40bd
export async function addNote(NoteObj) {
  const result = await query(
    `INSERT INTO notes (patient_id, carer_id, text_content, type_note, time_of_input, has_been_seen) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [
      NoteObj.patient_id,
      NoteObj.carer_id,
      NoteObj.text_content,
      NoteObj.type_note,
      NoteObj.time_of_input,
      NoteObj.has_been_seen,
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
