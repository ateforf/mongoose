let mongoose = require('mongoose');
const express = require('express')
const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'myDB';      // REPLACE WITH YOUR DB NAME
const app=express()
app.use(express)
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
app.listen(3500,()=>{console.log("server running")})
module.exports = new Database()