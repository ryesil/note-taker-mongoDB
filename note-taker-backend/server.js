const express=require('express');
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");

app.use(cors());

//to parse the request comming from the frontend
app.use(express.json())


//connect to mongoose
mongoose.connect("mongodb://localhost:27017/notesDB")


