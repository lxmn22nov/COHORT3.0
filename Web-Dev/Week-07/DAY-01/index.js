const express = require("express");
const { UserModel, TodoModel } = require("./db");

const app = express();

app.post("/signup", function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    UserModel.insert({
        email: email,
        password: password,
        name: name
    })
});

app.post("/signin", function(req, res) {

});

app.post("/todo", function(req, res) {

});

app.get("/todos", function(req, res) {

});

app.listen(3000);