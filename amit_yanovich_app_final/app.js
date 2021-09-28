const express = require("express");
const bodyParser = require("body-parser");
const sql= require ("./DB/db.js");
const app = express();
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const publicDirec = path.join(__dirname,'public');
app.use(express.static(publicDirect));

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname,"/views/CV.html"));});

app.listen(3000, () => {
console.log("Server is running on port 3000." );});