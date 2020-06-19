if(process.env.NODE_ENV !== 'production'){
    require('dotenv')
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')

app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

//connecting DB
mongoose.connect(
    "process.env.DATABASE_URL",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    () => console.log("connected to db")
  );


app.use('/', indexRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=> console.log(`server started at port : ${PORT}`))