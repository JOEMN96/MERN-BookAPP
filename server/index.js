import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import chalk from "chalk";
import * as dotenv from "dotenv";

// File imports
import postRoutes from "./routes/book.js";

const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();
const dbUrl = process.env.DB_URL;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Db Connection
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(chalk.blue.bgGreen("connected"));
    app.listen(PORT, () => {
      console.log(chalk.blue.bgGreen(`Server is Running On ${PORT}`));
    });
  })
  .catch((err) => console.log(err));
mongoose.set("useFindAndModify", false);

app.use(postRoutes);
