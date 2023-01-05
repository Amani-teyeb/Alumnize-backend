const express = require('express')
const app = express()
const env = require("dotenv")
const authRoutes = require('./routes/auth')
const mongoose = require('mongoose')
const connectDB = require('../src/config/connectDB');

env.config();
app.use(express.json());
mongoose.set('strictQuery', false)
connectDB();

app.use('/api', authRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`)
} )