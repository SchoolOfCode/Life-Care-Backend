import express from "express";
import morgan from "morgan";
import cors from "cors";
import patientsRouter from "./routes/patients.js";
import carersRouter from "./routes/carers.js";


const app = express();



// Middlewares
app.use(cors("*"));
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
// add vaildation middleware here!




// Routing
app.use("/api/patients", patientsRouter);
app.use("/api/carers", carersRouter);


export default app;