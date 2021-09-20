const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sql = require("./db");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
res.json({ message: "Welcome to web course  example application." });});

app.listen(3000, () => {
console.log("Server is running on port 3000.");});

// Create a route for getting all users
app.get("/users", function(req, res){
    sql.query("SELECT * FROM users", (err, mysqlres) => {
        if (err) {
        console.log("error: ", err);
        res.status(400).send({message: "error in getting all users: " + err});
        return;
        }

        console.log("got all users...");  
        res.send(mysqlres);
        return;
    });
});