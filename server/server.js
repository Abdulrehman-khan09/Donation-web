const app = require('./app')
const http = require("http")
require('dotenv').config()
// requiring database connection
const ConnectDb = require('./db/db')
// calling the function we exported from db.js
ConnectDb()
const Port = process.env.Port 

const server = http.createServer(app)


server.listen(Port, () => {
  console.log(`server running on port: ${Port}`)
})

