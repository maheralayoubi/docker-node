const express = require("express")
const mongoose = require('mongoose');
const app = express()


mongoose
    .connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}?authSource=admin`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(()=> console.log('connected'))
    .catch((error) => console.error(error));

app.get("/", (req, res) => {
    res.send("<h2>Hi there whats!!!</h2>")
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`litening on port${port}`))