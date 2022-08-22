import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";

const app = express();
app.use(express.json());

app.use("/api/user", router);

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.r1scmoc.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected to Database and Listening to LocalHost 5000")
  )
  .catch((err) => console.log(err));

// app.listen(5000);
