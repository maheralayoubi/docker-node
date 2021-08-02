const express = require("express")
const mongoose = require('mongoose');
const app = express()


mongoose
    .connect('mongodb://root:pass12345@mongo:27017/?authSource=admin')
    .then(()=> console.log('connected'))
    .catch((error) => console.error(error));

app.get("/", (req, res) => {
    res.send("<h2>Hi there whats!!!</h2>")
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`litening on port${port}`))