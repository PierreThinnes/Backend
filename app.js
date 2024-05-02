const express = require("express");

const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");

const mongoose = require("mongoose")
require("dotenv").config()


const connexionMongoose = () => {
    try {
        mongoose.connect(process.env.DBLINK, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connexion à MongoDB réussie !");
    } catch {
        (err) => console.log("Connexion à MongoDB échouée !", err);
    }
};
connexionMongoose();








const app = express()












/**
app.use("/images", express.static(path.join(__dirname, "images"))); // mise avant pour indiquer à Express qu'il faut gérer la ressource images de manière statique
app.use("/api/books", bookRoutes);
app.use("/api/auth", userRoutes);
*/

module.exports = app