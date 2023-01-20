import { Router } from "express";
import {
  addNote,
  getPatientByID,
  getNotesByPatientID,
} from "../models/patients.js";

import { validateAccessToken } from "../auth0-middleware.js";

const router = Router();

// POST new patient note
router.post(
  "/:patient_id/notes",
  validateAccessToken,
  async function (req, res) {
    const note = await addNote(req.body);
    res.json({
      success: true,
      payload: note,
    });
  }
);

// GET single patient's info
router.get("/:patient_id", validateAccessToken, async function (req, res) {
  const patient = await getPatientByID(req.params.patient_id);
  res.json({
    success: true,
    payload: patient,
  });
});

// GET single patient's notes
router.get(
  "/:patient_id/notes",
  validateAccessToken,
  async function (req, res) {
    const notes = await getNotesByPatientID(req.params.patient_id);
    res.json({
      success: true,
      payload: notes,
    });
  }
);

export default router;
