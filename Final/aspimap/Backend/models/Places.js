const mongoose = require('mongoose');
const {Schema} = mongoose;

const PlaceSchema = new Schema({
    user:  {type: mongoose.Schema.Types.ObjectId, ref:'User'}, // String is shorthand for {type: String}
    location:  {type: String, required:true}, // String is shorthand for {type: String}
    name:  {type: String, required:true}, // String is shorthand for {type: String}
    address: {type: String},
    phone: {type: String},
    website: {type: String},
    price: {type: String},
    date: { type: Date, default: Date.now }
  });

module.exports = mongoose.model("Places",PlaceSchema)