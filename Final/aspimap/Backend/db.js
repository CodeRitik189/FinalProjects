const mongoose = require('mongoose')
const mongoURI = "`mongodb://localhost/${env.db}/devcomm`"
//MmAVzKAjzavKpzKs
const connectToMongo = ()=>{

    mongoose.connect(mongoURI, ()=>{
        // console.log("Connected to mongo successfully!")
    })
}

module.exports = connectToMongo;