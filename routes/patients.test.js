import { expect, test } from "@jest/globals";
import supertest from "supertest"; 
import app from "../app";

// Test for getting all patients
test("Getting a single patients information", async () => {
    try {
        const response = await supertest(app).get("/api/patients/:patient_id")
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({
            success: true,
            payload: expect.any(Object)
        })
    } catch (error) {
        console.log(error);
    }
})

// Testing to see if we get patient's notes

test("Getting a single patients notes", async () => {
    try {
        const response = await supertest(app).get("/api/patients/:patient_id/notes")
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({
            success: true,
            payload: expect.any(Object)
        })
    } catch (error) {
        console.log(error);
    }
});

// Testing to see if we can add a note to a patient

test("Adding a note to a patient", async () => {
    try {
        const response = await supertest(app).post("/api/patients/:patient_id/notes")
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({
            success: true,
            payload: expect.any(Object)
        })
    } catch (error) {
        console.log(error);
    }
});