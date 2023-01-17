import express from "express";
import morgan from "morgan";
import cors from "cors";
import patientsRouter from "./routes/patients.js";
import carersRouter from "./routes/carers.js";


const app = express();
const port = 3005;

// Middlewares
app.use(cors("*"));
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
// add vaildation middleware here!

app.listen(port, () => {
	console.log(`app listening on port ${port}`);
});

// Routing
app.use("/api/patients", patientsRouter);
app.use("/api/carers", carersRouter);


export default app;