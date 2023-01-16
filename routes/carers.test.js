import { expect, test } from "@jest/globals";
import supertest from "supertest"; 
import app from "../app";


test('it gets all the carers', async()=>{
    try {
        const response = await supertest(app).get("/api/carers")
        expect(response.status).toBe(200);
        expect (response.body).toStrictEqual ({
            success: true,
            payload: expect.any(Array)
        })

    } catch (error){
        console.log(error);
    }
    
})

test('it gets carers by ID', async()=> {
    try {
        const response = await supertest(app).get("/api/carers/:carer_id")
        expect(response.status).toBe(200);
        expect (response.body).toStrictEqual({
            success: true,
            payload: expect.any(Object)
        })
    }catch (error){
        console.log(error);
    }
})

test("Getting array of assigned patients", async()=>{
    try {
        const response = await supertest(app).get("/api/carers/:carer_id/patients")
        expect(response.status).toBe(200);
        expect (response.body).toStrictEqual({
            success: true,
            payload: expect.any(Array)
        })
    } catch (error){
        console.log(error);
    }
})
