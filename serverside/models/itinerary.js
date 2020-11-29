const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
  const itinerarySchema = new mongoose.Schema({
    travellingFrom:  { type: String, required: true},
    travellingTo:  { type: String, required: true},
    StartDate:{type:Date,required: true},
    EndDate:{type:Date,required: true},
    Adults:{type:Number,required: true},
    Children:{type:Number,required: true},
    PackageType:{type: String, required: true},
    ContactNumber:{type:Number,required:true}
  });

//use the blueprint to create the model 
// Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Itinerary', itinerarySchema,'itinerariesData');
//note capital S in the collection name
