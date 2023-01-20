import { expect, test } from "@jest/globals";
import supertest from "supertest";
import app from "../app";

// Test for getting all patients
test("Getting a single patients information", async () => {
  const response = await supertest(app)
    .get("/api/patients/1")
    .set("Authorization", `Bearer ${process.env.ACCESS_TOKEN}`);
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      patient_id: expect.any(Number),
      avatar: expect.any(String),
      first_name: expect.any(String),
      last_name: expect.any(String),
      number: expect.any(String),
      dob: expect.any(String),
      address: expect.any(String),
      overview: expect.any(String),
      medical_history: expect.any(String),
    },
  });
});

// Testing to see if we get patient's notes

test("Getting a single patients notes", async () => {
  const response = await supertest(app)
    .get("/api/patients/1/notes")
    .set("Authorization", `Bearer ${process.env.ACCESS_TOKEN}`);
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: expect.any(Array),
  });
  let patientNotesArray = response.body.payload;
  for (let i = 0; i < patientNotesArray.length; i++) {
    expect(patientNotesArray[i]).toStrictEqual({
      note_id: expect.any(Number),
      patient_id: expect.any(Number),
      carer_id: expect.any(Number),
      content: expect.any(String),
      incidents: expect.any(String),
      additional: expect.any(String),
      time_stamp: expect.any(String),
      first_name: expect.any(String),
      last_name: expect.any(String),
    });
  }
});

// // Testing to see if we can add a note to a patient

test("Adding a note to a patient", async () => {
  const patient_id = 1;
  const carer_id = 1;
  const content = "He was doing to";
  const incidents = "She fell over again";
  const additional = "He's making good progress";
  const time_stamp = "2022-10-23T23:00:00.000Z";

  const response = await supertest(app)
    .post("/api/patients/1/notes")

    .set("Authorization", `Bearer ${process.env.ACCESS_TOKEN}`)

    .send({
      patient_id,
      carer_id,
      content,
      incidents,
      additional,
      time_stamp,
    });

  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      note_id: expect.any(Number),
      patient_id: expect.any(Number),
      carer_id: expect.any(Number),
      content: expect.any(String),
      incidents: expect.any(String),
      additional: expect.any(String),
      time_stamp: expect.any(String),
    },
  });
});

test("it returns an error when the access token is invalid", async () => {
  const response = await supertest(app)
    .get("/api/patients")
    .set("Authorization", "Bearer invalid_access_token");
  expect(response.status).toBe(404);
});
