const express = require("express")
const app = express()

const cors = require('cors')
app.use(cors())

// middlewares for post request
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const adminRoutes = require('./routes/admin.routes')
app.use('/admin',adminRoutes)

// testing purpose
app.get("/",(req,res)=>{
     res.send("hlo world")
})

module.exports = app