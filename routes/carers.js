import { Router } from "express";
import {
  getAllCarers,
  getCarerByID,
  getPatientsByCarerID,
} from "../models/carers.js";
import { validateAccessToken } from "../auth0-middleware.js";

const router = Router();

// GET all carers
router.get("/", validateAccessToken, async function (req, res) {
  const carersArr = await getAllCarers();
  res.json({
    success: true,
    payload: carersArr,
  });
});

// GET carer's info by carer_id
router.get("/:carer_id", validateAccessToken, async function (req, res) {
  const carer = await getCarerByID(req.params.carer_id);
  res.json({
    success: true,
    payload: carer,
  });
});

// GET array of assigned patients
router.get(
  "/:carer_id/patients",
  validateAccessToken,
  async function (req, res) {
    const patientsArr = await getPatientsByCarerID(req.params.carer_id);
    res.json({
      success: true,
      payload: patientsArr,
    });
  }
);

export default router;
