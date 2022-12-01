const express = require('express');
const path = require('path')
const hbs = require("hbs");
const app = express();
const routes = require('./routes/main')
const mongoose = require("mongoose")
const add = require("../model/model.js")
let model = require("../model/model.js")
app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")
app.use('/static', express.static("public"))
app.use('', routes)
const entry = require('../model/model')

let connectdb = require("../connection/connectdb.js")
connectdb()

app.use(express.urlencoded({ extended : true}))
add()

app.post("/subjson", (req, res) => {
    let name = req.body.name
    let phone = req.body.phone
    let email = req.body.email

    let ent = new entry({
        name : name,
        phone : phone,
        email : email,
    })

    ent.save()
    res.redirect('/main')
    res.sendFile(path.join(__dirname, "/Main"))
})

app.listen(process.env.PORT | 7000, () => {
    console.log("server started")
})
