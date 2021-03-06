const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
  const flightSchema = new mongoose.Schema({
    From: { type: String, required: true}, 
    Towhere: { type: String, required: true}, 
    Trip:  { type: String, required: true},
    Depart:{ type: Date, required: true}, 
    Return: { type: Date, required: true}, 
    people: { type: Number, required: true}
  });

//use the blueprint to create the model 
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('flight', flightSchema,'flightsdata');
//note capital S in the collection name
