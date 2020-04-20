const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const requireDir = require("require-dir");

const app = express();
// permitir envio/recebimento de dados no formado json
app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
);

requireDir("./src/models");

// const Product = mongoose.model('Product');

app.use('/api', require("./src/routes"));

app.listen(3001);