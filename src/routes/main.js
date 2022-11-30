const express = require('express');
const { route } = require('express/lib/application');
const routes = express.Router();
routes.get("/", (req, res) => {
    res.render("introjson")
})
routes.get('/main', (req, res) => {
    res.render("main")
})
routes.get('/budget', (req, res) => {
    res.render("budget")
})
routes.get('/greece', (req, res) => {
    res.render("greece")
})
routes.get('/india', (req, res) => {
    res.render("india")
})
routes.get('/Korea', (req, res) => {
    res.render("Korea")
})
routes.get('/Travel', (req, res) => {
    res.render("Travel")
})
routes.get('/subjson', (req, res) => {
    res.render("subjson")
})

module.exports = routes