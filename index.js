const express = require("express");
const path = require("path");
const app = express();
const port = 3003;

const lab = require("./routes/lab");
const profile = require("./routes/profile");

// set view engine as EJS
app.set("view engine", "ejs");
// middleware to parse HTML form (url-encoded form data)
app.use(express.urlencoded({ extended: true }));

// use routes
app.use(lab);
app.use(profile);

// server static files from "public" directory
app.use(express.static(path.join(__dirname, "public")));

// start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});