import { Router } from 'express';
import { getNotesByPatientID, getPatientByID } from '../models/patients.js';

const router = Router();

// GET single patient's info
router.get('/:patient_id', async function (req, res) {
  const patient = await getPatientByID(req.params.patient_id);
  res.json({
    success: true,
    payload: patient
  });
})

// GET single patient's notes
router.get('/:patient_id/notes', async function (req, res) {
  const notes = await getNotesByPatientID(req.params.patient_id)
  console.log(notes);
  res.json({
    success: true,
    payload: notes
  });
});  

    
export default router;