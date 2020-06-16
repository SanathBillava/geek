const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const { MONGOURI } = require('./keys');


mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("connected to mongodb");
});

mongoose.connection.on('error', (err) => {
    console.log("error connecting", err);
});

//User Models
require("./models/user");

app.use(express.json());

//Routes
app.use(require('./routes/auth'));


app.listen(PORT, () => {
    console.log("Server is running on", PORT);
});