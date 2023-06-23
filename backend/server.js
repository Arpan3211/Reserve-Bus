import express from "express";
import tripsRoute from './routes/tripsRoute.js'
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

import ticketsRoute from './routes/ticketsRoute.js'
import stateRoutes from './routes/stateRoutes.js'

import cors from 'cors';
//configure env
dotenv.config();

//databse config


//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1", tripsRoute);
app.use("/api/v1", ticketsRoute);
app.use("/api/v1", stateRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Bus Reservation app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
const serverStart = async () => {
  try {
    connectDB(process.env.MONGO_URL);// Connecting to the MongoDB database
    app.listen(PORT, () =>
      console.log("server is running on port 8080"))// Starting the server
  } catch (error) {
    console.log(error)
  }
};

serverStart();