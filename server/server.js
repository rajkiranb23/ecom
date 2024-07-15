const express = require("express");
const cors = require("cors");
const Connection = require("./database/Db.js");

const Router = require("./routes/route");
const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cors());

//connecting to mongoDB
//getting the credential from environment variable and connecting to the DB

// const username = process.env.DB_USER;
// const password = process.env.DB_PASSWORD;

// Connection();

// sending  a response on homepage to let them know its running

// app.get("/", (req, res) => {
//   res.send("Express app is running");
// });
//getting all the routes

app.use("/", Router);

//making the app to listen to a port where our server will be running

app.listen(PORT, () => {
  console.log(`hey server is running successfully on ${PORT}`);
});
//connecting to the DB
Connection();
