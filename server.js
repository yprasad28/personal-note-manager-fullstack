const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const notesRoutes = require("./routes/notes");

const app = express();

const PORT = process.env.PORT || 5001
// const {DB_USER, DB_PASSWORD} = process.env

MONGODB_URI = 'mongodb://prasad28:Yamala%4028@todolist-shard-00-00.pdxhy.mongodb.net:27017,todolist-shard-00-01.pdxhy.mongodb.net:27017,todolist-shard-00-02.pdxhy.mongodb.net:27017/?ssl=true&replicaSet=atlas-1srrso-shard-0&authSource=admin&retryWrites=true&w=majority&appName=todolist'


app.use(express());
app.use(bodyParser.json());
app.use(cors());

app.use("/notes", notesRoutes);

mongoose.connect(MONGODB_URI)
.then(() =>{
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => console.log(err))