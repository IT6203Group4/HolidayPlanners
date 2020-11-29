const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');

//specify where to find the schema
const Itinerary = require('./models/itinerary')
//const for hotels to test
const Hotel=require('./models/hotel')
const Carrental = require('./models/carrental')
const Flight = require('./models/flight')
// connect and display the status 

//const uri ='mongodb+srv://holidayplanner:fallproject@cluster0.ocsgj.mongodb.net/mygroup?retryWrites=true&w=majority'
//mongoose.connect('mongodb://localhost:27017/IT6203', { useNewUrlParser: true })
 // .then(() => { console.log("connected"); })
 // .catch(() => { console.log("error connecting"); });

//test code
 const uri ='mongodb+srv://holidayplanner:fallproject@cluster0.ocsgj.mongodb.net/mygroup?retryWrites=true&w=majority'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => { console.log("connected"); })
.catch(() => { console.log("error connecting"); });

// use the following code on any request that matches the specified mount path
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS,DELETE '); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/itinerariesData', (req, res, next) => {
     //call mongoose method find (MongoDB db.itinerariesData.find())
  Itinerary.find() 
  //if data is returned, send data as a response 
  .then(data => res.status(200).json(data))
  //if error, send internal server error
  .catch(err => {
  console.log('Error: ${err}');
  res.status(500).json(err);
});
});

//hote getdata
app.get('/hotelsdata', (req, res, next) => {
  console.log('start of hotels');
  //call mongoose method find (MongoDB db.hotel.find())
  Hotel.find() 
  //if data is returned, send data as a response 
  .then(data => res.status(200).json(data))
  //if error, send internal server error
  .catch(err => {
  console.log('Error: ${err}');
  res.status(500).json(err);
});
});

// serve incoming post requests to /Itineraries
app.post('/itinerariesData', (req, res, next) => {
    // create a new itinerary variable and save request’s fields 
  const itinerary = new Itinerary({
    travellingFrom: req.body.travellingFrom,
    travellingTo: req.body.travellingTo,
    StartDate: req.body.StartDate,
    EndDate:req.body.EndDate,
    Adults:req.body.Adults,
    Children:req.body.Children,
    PackageType:req.body.PackageType,
    ContactNumber:req.body.ContactNumber
  });
  //send the document to the database 
  itinerary.save()
    //in case of success
    .then(() => { console.log('Success');})
    //if error
    .catch(err => {console.log('Error:' + err);});

  });
  //:id is a dynamic parameter that will be extracted from the URL
app.delete("/itinerariesData/:id", (req, res, next) => {
    Itinerary.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json("Deleted!");
    });
  });

  app.put('/itinerariesData/:id', (req, res, next) => {
    console.log("id: " + req.params.id)
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      //find a document and set new first and last names
      Itinerary.findOneAndUpdate({_id: req.params.id},
        {$set:{travellingFrom : req.body.travellingFrom,
          travellingTo : req.body.travellingTo,
          StartDate: req.body.StartDate,
          EndDate:req.body.EndDate,
          Adults:req.body.Adults,
          Children:req.body.Children,
          PackageType:req.body.PackageType,
          ContactNumber:req.body.ContactNumber }},{new:true}) 
       .then((itinerary) => {
          if (itinerary) { //what was updated
            console.log(itinerary);
          } else {
            console.log("no data exist for this id");
          }
       })
      .catch((err) => {
        console.log(err);
       });
   } else {
     console.log("please provide correct id");
   }
    
  });  

  // Hotel Component test code
  

  app.post('/hotelsdata', (req, res, next) => {
    const hotel = new Hotel({
      Destination: req.body.Destination,
      Checkin: req.body.Checkin,
      Checkout: req.body.Checkout,
      Class: req.body.Class,
      PropertyType:req.body.PropertyType,
      Guests: req.body.Guests
    });
    //send the document to the database 
    hotel.save()
      //in case of success
      .then(() => { console.log('Success');})
      //if error
      .catch(err => {console.log('Error:' + err);});
      res.status(201).json('Post successful');
    });
    // serve incoming put requests to /students
    app.put('/hotelsdata/:id', (req, res, next) => {
      console.log("id: " + req.params.id)
      // check that the parameter id is valid 
      if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        //find a document and set new first and last names
        Hotel.findOneAndUpdate({_id: req.params.id},
          {$set:{Destination : req.body.Destination,
            Checkin: req.body.Checkin,
            Checkout: req.body.Checkout,
            Class: req.body.Class,
            Guests: req.body.Guests}},{new:true}) 
         .then((hotel) => {
            if (hotel) { //what was updated
              console.log(hotel);
            } else {
              console.log("no data exist for this id");
            }
         })
        .catch((err) => {
          console.log(err);
         });
     } else {
       console.log("please provide correct id");
     }   
    });  
      app.delete("/hotelsdata/:id", (req, res, next) => {
        console.log("abcd");
        Hotel.deleteOne({ _id: req.params.id }).then(result => {
          console.log(result);
          res.status(200).json("Deleted!");   
        }); 
      });

      //flights component
      app.get('/flightsdata', (req, res, next) => {
        //call mongoose method find (MongoDB db.Students.find())
        Flight.find()
          //if data is returned, send data as a response 
          .then(data => res.status(200).json(data))
          //if error, send internal server error
          .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
          });
      
      });
      // serve incoming post requests to /paymentMethods
      app.post('/flightsdata', (req, res, next) => {
        const flight = new Flight({
          From: req.body.From,
          Towhere: req.body.Towhere,
          Trip: req.body.Trip,
          Depart: req.body.Depart,
          Return: req.body.Return,
          people: req.body.people
        });
        flight.save()
          .then(() => { console.log('Success'); })
          //if error
          .catch(err => { console.log('Error:' + err); });
      
        });
        app.put('/flightsdata/:id', (req, res, next) => {
          console.log("id: " + req.params.id)
          // check that the parameter id is valid 
          if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            //find a document and set new first and last names
            Flight.findOneAndUpdate({_id: req.params.id},
              {$set:{From: req.body.From,
                Towhere: req.body.Towhere,
                Trip: req.body.Trip,
                Depart: req.body.Depart,
                Return: req.body.Return,
                people: req.body.people
              }},{new:true}) 
             .then((flight) => {
                if (flight) { //what was updated
                  console.log(flight);
                } else {
                  console.log("no data exist for this id");
                }
             })
            .catch((err) => {
              console.log(err);
             });
         } else {
           console.log("please provide correct id");
         }
          
        });  
      
        //delete code
        //:id is a dynamic parameter that will be extracted from the URL
        app.delete("/flightsdata/:id", (req, res, next) => {
          Flight.deleteOne({ _id: req.params.id }).then(result => {
            console.log(result);
            res.status(200).json("Deleted!");
          });
        });
        //cars component
        app.get('/carrentals', (req, res, next) => {
          // call mongoose method find (MongoDB db.Students.find())  
          Carrental.find()
              //if data is returned, send data as a response    
              .then(data => res.status(200).json(data))
              //if error, send internal server error    
              .catch(err => {
                  console.log(`Error: ${err}`);
                  res.status(500).json(err);
              }); 
      
      });
      
      //cars component

      app.get('/carrentals', (req, res, next) => {
        // call mongoose method find (MongoDB db.Students.find())  
        Carrental.find()
            //if data is returned, send data as a response    
            .then(data => res.status(200).json(data))
            //if error, send internal server error    
            .catch(err => {
                console.log(`Error: ${err}`);
                res.status(500).json(err);
            }); 
    
    });
    
    
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
    
    // parse application/json
    app.use(bodyParser.json())
    // serve incoming post requests to /carrentals
    app.post('/carrentals', (req, res, next) => { 
        // create a new student variable and save request’s fields
        console.log("test req " + req.body.Ft_Nm);
        const carrental = new Carrental({
    
            Ft_Nm: req.body.Ft_Nm, 
            Lt_Nm: req.body.Lt_Nm, 
            Em_ID: req.body.Em_ID,
            Mbl_Num: req.body.Mbl_Num,
            Lisn_Num: req.body.Lisn_Num,
            p_d_loc: req.body.p_d_loc,
            pickup_dt: req.body.pickup_dt,
            pickup_tym: req.body.pickup_tym,
            dropoff_dt: req.body.dropoff_dt,
            dropoff_tym: req.body.dropoff_tym,
            find_my_car: req.body.find_my_car
        });
    
        //    send the document to the database 
        carrental.save()
            //in case of success
            .then(() => { console.log('Success'); })
            //if error
            .catch(err => { console.log('Error:' + err); });
    
    });
    
    // id is a dynamic parameter that will be extracted from the URL
    app.delete("/carrentals/:id", (req, res, next) => {
        Carrental.deleteOne({ _id: req.params.id }).then(result => {
            console.log(result);
            res.status(200).json("Deleted!");
        });
    });
    // serve incoming put requests to /students
    app.put("/carrentals/:id", (req, res, next) => {
        console.log("id: " + req.params.id)
        // check that the parameter id is valid 
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
          //find a document and set new first and last names
          Carrental.findOneAndUpdate({_id: req.params.id},
            {$set:{ Ft_Nm: req.body.Ft_Nm, 
                Lt_Nm: req.body.Lt_Nm,
                Em_ID: req.body.Em_ID,
                Mbl_Num: req.body.Mbl_Num,
                Lisn_Num: req.body.Lisn_Num,
                p_d_loc: req.body.p_d_loc,
                pickup_dt: req.body.pickup_dt,
                pickup_tym: req.body.pickup_tym,
                dropoff_dt: req.body.dropoff_dt,
                dropoff_tym: req.body.dropoff_tym,
                find_my_car: req.body.find_my_car}},{new:true}) 
           .then((carrental) => {
              if (carrental) { //what was updated
                console.log(carrental);
              } else {
                console.log("no data exist for this id");
              }
           })
          .catch((err) => {
            console.log(err); 
           });
       } else {
         console.log("please provide correct id");
       }
        
      });  

//to use this middleware in other parts of the application
module.exports = app;
