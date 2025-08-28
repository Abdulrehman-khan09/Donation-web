const express = require("express")
const app = express()

const cors = require('cors')
app.use(cors())

// middlewares for post request
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const adminRoutes = require('./routes/admin.routes')
const seekerRoutes = require('./routes/seeker.routes')
const donorRoutes = require('./routes/donor.routes')

app.use('/admin',adminRoutes)
app.use('/seeker',seekerRoutes)
app.use('/donor', donorRoutes)



// testing purpose
app.get("/",(req,res)=>{
     res.send("hlo world")
})

module.exports = app