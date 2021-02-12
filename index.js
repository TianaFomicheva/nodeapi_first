
const express = require('express')
const mongoose = require('mongoose')
const config = require('./config');
const bcrypt = require('bcrypt')
// console.log("1 ", bcrypt.hashSync("password", 10))
// console.log("1 ", bcrypt.compareSync("password", "$2b$10$CF4.1dCWmI7ztkiaaPJE.umABuhsuEyup3bIULGDdYjLFp6OI5Z56"))
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.mongoUri)
require('./app/models')

const {appPort, mongoUri} = config.app
mongoose.connect(mongoUri)
.then(()=>app.listen(appPort, ()=>console.log('Listening 3000...')))
.catch((err)=>console.error(`Error connecting to mongo: ${mongoUri}`, err))


const app = express()
config.express(app)
config.routes(app)


// const products = 
// [
//     {
//     "id": 1,
//     "name": "phone",
//     "price": 300,
// }
// ,
//     {
//     "id": 2,
//     "name": "tablet",
//     "price": 400,
// }
// ]






//eslint-disable-next-line
