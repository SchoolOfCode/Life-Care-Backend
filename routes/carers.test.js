import { expect, test } from "@jest/globals";
import supertest from "supertest"; 
import app from "../app";


test.first('it gets all the carers', async()=>{
    
        const response = await supertest(app).get("/api/carers")
        expect(response.status).toBe(200);
        expect (response.body).toStrictEqual ({
            success: true,
            payload: expect.any(Array)
        })
    
})

test('it gets carers by ID', async()=> {

        const response = await supertest(app).get("/api/carers/:carer_id")
        expect(response.status).toBe(200);
        expect (response.body).toStrictEqual({
            success: true,
            payload: expect.any(Object)
        })
})

test("Getting array of assigned patients", async()=>{
    
        const response = await supertest(app).get("/api/carers/:carer_id/patients")
        expect(response.status).toBe(200);
        expect (response.body).toStrictEqual({
            success: true,
            payload: expect.any(Array)
        })

})
