const express= require('express')
const app = express()
const path = require('path')
const UserModel = require("./schema")
const database = require('./db')
require('dotenv').config();
let port=8000;

database();

app.use(express.urlencoded({extended: true})); //for MongoDB

app.post('/', async (req, res)=>{
try {
    const {Email, Age, Contact, Gender} = req.body;
    const message = new UserModel({
        Email, Age, Contact, Gender
    })

    const savedMessage = await message.save();

} 
catch (error) {
    console.error(error.message);
    res.status(500).send("An Error Occured!");
}   
})

app.listen(port,()=>{
    console.log(`the application has started successfully on localhost: http://localhost:${port}`);
})
