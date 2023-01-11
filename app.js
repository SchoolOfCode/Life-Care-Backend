import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import clientsRouter from './routes/clients.js';

const app = express()
const port = 3005

// Middlewares
app.use(cors('*'));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

// Routing
app.use('/api/clients', clientsRouter);

