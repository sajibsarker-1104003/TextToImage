const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const port = 3000;
const app = express();

//app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));


global.__basedir = "public/"; // set base directory

// MongoDB configuration
const db = require("./config/db");

mongoose
  .connect(db.mongoURIDev)
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log(err));
//Use Routes

app.use("/api/v1/text-image", require("./Router/apiRouter"));

app.use('/public', express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});