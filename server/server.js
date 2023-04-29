require("dotenv").config()
const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const authRoutes = require('./routes/authRoutes')


const app = express()

// middleware
app.use(express.json())

app.use(cors({
    origin: 'http://192.168.101.48:3007'
}))

//* Importing the Todo routes
const todoRoutes = require('./routes/todo.routes.js')

//^ Using Date log where the CRUD method was last used.
const date = new Date()

const displayDate = `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`
app.use((req, res, next) => {
    console.log((req.path, req.method), displayDate)
    next()
})

//* Routes - Basic Routes are working.
app.use('/api/todos', todoRoutes)

app.use(authRoutes)


//* Connecting to MongoDB.
mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.DATABASE_NAME //* Connecting to the CAR_INV_DB database
})
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server running at: http://localhost:${process.env.PORT}`)
        })
        console.log("Connected to MongoDB", `DATABASE: ${process.env.DATABASE_NAME}`)
    })
    .catch((error) =>{
        console.log(error)
    })



