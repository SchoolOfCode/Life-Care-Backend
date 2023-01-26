import { expect, test } from "@jest/globals";
import supertest from "supertest";
import app from "../app";

test("it gets all the carers", async () => {
  const response = await supertest(app)
    .get("/api/carers")
    .set("Authorization", `Bearer ${process.env.ACCESS_TOKEN}`);
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: expect.any(Array),
  });
  let carersArray = response.body.payload;
  for (let i = 0; i < carersArray.length; i++) {
    expect(carersArray[i]).toStrictEqual({
      carer_id: expect.any(Number),
      avatar: expect.any(String),
      first_name: expect.any(String),
      last_name: expect.any(String),
      number: expect.any(String),
      email: expect.any(String),
    });
  }
});

test("it gets carers by ID", async () => {
  const response = await supertest(app)
    .get("/api/carers/1")
    .set("Authorization", `Bearer ${process.env.ACCESS_TOKEN}`);
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      carer_id: expect.any(Number),
      avatar: expect.any(String),
      first_name: expect.any(String),
      last_name: expect.any(String),
      number: expect.any(String),
      email: expect.any(String),
    },
  });
});

test("Getting array of assigned patients", async () => {
  const response = await supertest(app)
    .get("/api/carers/1/patients")
    .set("Authorization", `Bearer ${process.env.ACCESS_TOKEN}`);
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: expect.any(Array),
  });
  let carerPatientArray = response.body.payload;
  for (let i = 0; i < carerPatientArray; i++) {
    expect(carerPatientArray[i]).toStrictEqual({
      patient_id: expect.any(Number),
      avatar: expect.any(String),
      first_name: expect.any(String),
      last_name: expect.any(String),
      number: expect.any(String),
      dob: expect.any(String),
      address: expect.any(String),
      overview: expect.any(String),
      medical_history: expect.any(String),
    });
  }
});

test("it returns an error when the access token is invalid", async () => {
  const response = await supertest(app)
    .get("/api/carers")
    .set("Authorization", "Bearer invalid_access_token");
  expect(response.status).toBe(401);
});
