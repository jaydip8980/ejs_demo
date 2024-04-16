const express = require("express");
const routes = express.Router();


routes.get("", (req, res) => {
    res.render("index");
})

routes.get("/about", (req, res) => {
    res.render("about");
})

routes.get("/contact", (req, res) => {
    res.render("contact");
})

routes.get("/portfolio", (req, res) => {
    res.render("portfolio");
})

routes.get("/feedback", (req, res) => {
    res.render("feedback");
})



module.exports = routes;