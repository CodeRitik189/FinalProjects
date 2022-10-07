const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
const User = require('./models/User');
connectToMongo();
const app = express()
const http  = require( 'http' ).createServer( app );
const port = process.env.PORT||5000;
app.use(cors())
//Available Routes
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/places',require('./routes/places'))
app.get('/',(req,res)=>{
  res.sendFile('/index.html',{ root: '.' });
})
app.get("hi",(req,res)=>{
  return res.send(User);
})
http.listen(port, () => {
  // console.log(`Example app listening on port ${port}`)
})  