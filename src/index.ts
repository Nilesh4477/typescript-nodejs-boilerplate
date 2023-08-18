import express from 'express';
import indexRoutes from './routes/index.routes';
import connectDB from "./connection/db";
import * as dotenv from "dotenv";
dotenv.config();
const PORT = 4000;
const app = express();
app.use(express.json());//This method returns the middleware that only parses JSON and only looks at the requests where the content-type header matches the type option.
app.use(express.urlencoded({ extended: true }));//It parses incoming requests with URL-encoded payloads and is based on a body parser.(nexted object)


connectDB()

app.use('/', indexRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});