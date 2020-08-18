const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config();
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

const app = express();
const port = process.env.PORT || 5000;

const dbUrl =
  "mongodb+srv://" +
  process.env.DATABASE_NAME +
  ":" +
  process.env.DATABASE_PASSWORD +
  "@cluster0.ozilb.mongodb.net/exerciseDB";

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
