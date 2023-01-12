import { Router } from "express";
import {
  getNotesByPatientID,
  getPatientByID,
  addNote,
} from "../models/patients.js";

const router = Router();

// GET single patient's info
router.get("/:patient_id", async function (req, res) {
  const patient = await getPatientByID(req.params.patient_id);
  res.json({
    success: true,
    payload: patient,
  });
});

// GET single patient's notes
router.get("/:patient_id/notes", async function (req, res) {
  const notes = await getNotesByPatientID(req.params.patient_id);
  console.log(notes);
  res.json({
    success: true,
    payload: notes,
  });
});

// POST new patient note
router.post("/patients/:patient_id/notes", async function (req, res) {
  // not sure if we need to pass in patient_id
  const note = await addNote(req.body);
  res.json({
    success: true,
    payload: note,
  });
});

export default router;
