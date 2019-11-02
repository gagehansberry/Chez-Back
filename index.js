const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
//const bearerToken = require('express-bearer-token');
//const events = require('./patient_record');
//const oktaAuth = require('./auth');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'software532',
  database : 'HealthTrack'
});
//connect
db.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('Database connected');
});

const port = process.env.PORT || 8080;

//connect to express server
const app = express()
  .use(cors())
  .use(bodyParser.json())
  //.use(events(db));

//add patient 
app.get('/addpatient', (req,res) =>{
  let patient= {name:'Evan Kosmos', phone_number: 123, address: null, insurance: null, dob: null, gender: null, care_taker:null, medications: null, appointments: null};
  //let patient = {name=req.body.name, phone_number=req.body.phone_number, address=req.body.address, insurance=req.body.insurance, dob=new Date(req.body.dob), gender=req.body.gender, care_taker=reg.body.care_taker, medications=req.body.medications, appointments=req.body.appointments};
  let sql = 'INSERT INTO patient_record SET ?';
  let query= db.query(sql, patient, (err, result) => {
    if(err){
      console.log("Error at line 35");
    }
    else{
      console.log(result);
      res.send('Patient added');
    }

  });
});

//select records
app.get('/getpatient/:id', (req, res) =>{
  let sql = `Select * FROM patient_record WHERE id= ${req.params.id}`;
  let query =db.query(sql, (err, result) =>{
    if(err){
      console.log('Error fething patient info');
    }
    else{
      console.log(result);
      res.send('Patient info fetched');
    }
  });
});


//update patient name
app.get('/updatepatientname/:id', (req, res) =>{
  let newName = name=req.body.name;
  //let newName = 'James';
  
  let sql = `UPDATE patient_record SET name = '${newName}' WHERE id= ${req.params.id}`;
  let query =db.query(sql, (err, result) =>{
    if(err){
      console.log('Error updating patient name');
    }
    else{
      console.log(result);
      res.send('Patient name Updated');
    }
  });
});

//update patient phone number
app.get('/updatepatientnumber/:id', (req, res) =>{
  let newNumber = req.body.phone_number;
  //let newName = 'James';
  let sql = `UPDATE patient_record SET phone_number = '${newNumber}' WHERE id= ${req.params.id}`;
  let query =db.query(sql, (err, result) =>{
    if(err){
      console.log('Error updating patient number');
    }
    else{
      console.log(result);
      res.send('Patient number Updated');
    }
  });
});

//update patient address
app.get('/updatepatientaddress/:id', (req, res) =>{
  let newAddy=req.body.address;
  //let newName = 'James';
  let sql = `UPDATE patient_record SET address = '${newAddy}' WHERE id= ${req.params.id}`;
  let query =db.query(sql, (err, result) =>{
    if(err){
      console.log('Error updating patient address');
    }
    else{
      console.log(result);
      res.send('Patient address Updated');
    }
  });
});



//update patient insurance
app.get('/updatepatientinsurance/:id', (req, res) =>{
  let newInsur =req.body.insurance;
  //let newName = 'James';
  
  let sql = `UPDATE patient_record SET insurance = '${newInsur}' WHERE id= ${req.params.id}`;
  let query =db.query(sql, (err, result) =>{
    if(err){
      console.log('Error updating patient insurance');
    }
    else{
      console.log(result);
      res.send('Patient insurance Updated');
    }
  });
});



//update patient dob
app.get('/updatepatientdob/:id', (req, res) =>{
  let newDOB =req.body.dob;
  //let newName = 'James';
  let sql = `UPDATE patient_record SET dob = '${newDOB}' WHERE id= ${req.params.id}`;
  let query =db.query(sql, (err, result) =>{
    if(err){
      console.log('Error updating patient DOB');
    }
    else{
      console.log(result);
      res.send('Patient DOB Updated');
    }
  });
});


//update patient gender
app.get('/updatepatientgender/:id', (req, res) =>{
  let newGen=req.body.gender;
  //let newName = 'James';
  let sql = `UPDATE patient_record SET gender = '${newGen}' WHERE id= ${req.params.id}`;
  let query =db.query(sql, (err, result) =>{
    if(err){
      console.log('Error updating patient gender');
    }
    else{
      console.log(result);
      res.send('Patient gender Updated');
    }
  });
});



//update patient care taker
app.get('/updatepatientcaretaker/:id', (req, res) =>{
  let newCare=req.body.care_taker;
  //let newName = 'James';
  let sql = `UPDATE patient_record SET care_taker = '${newCare}' WHERE id= ${req.params.id}`;
  let query =db.query(sql, (err, result) =>{
    if(err){
      console.log('Error updating patient care taker');
    }
    else{
      console.log(result);
      res.send('Patient care taker Updated');
    }
  });
});



//update patient medication
app.get('/updatepatientmedication/:id', (req, res) =>{
  let newMed=req.body.medications;
  //let newName = 'James';
  
  let sql = `UPDATE patient_record SET medications = '${newMed}' WHERE id= ${req.params.id}`;
  let query =db.query(sql, (err, result) =>{
    if(err){
      console.log('Error updating patient medication');
    }
    else{
      console.log(result);
      res.send('Patient medication Updated');
    }
  });
});

//update patient appointments
app.get('/updatepatientappointment/:id', (req, res) =>{
  let newApp=req.body.appointments;
  //let newName = 'James';
  
  let sql = `UPDATE patient_record SET appointments = '${newApp}' WHERE id= ${req.params.id}`;
  let query =db.query(sql, (err, result) =>{
    if(err){
      console.log('Error updating patient appointments');
    }
    else{
      console.log(result);
      res.send('Patient appointments Updated');
    }
  });
});


//Delete patient from record
app.get('/deletepatient/:id', (req, res) =>{
  //let newinfo = {name=req.body.name, phone_number=req.body.phone_number, address=req.body.address, insurance=req.body.insurance, dob=new Date(req.body.dob), gender=req.body.gender, care_taker=reg.body.care_taker, medications=req.body.medications, appointments=req.body.appointments;
  //let newName = 'James';
  let sql = `DELETE FROM patient_record WHERE id= ${req.params.id}`;
  let query =db.query(sql, (err, result) =>{
    if(err){
      console.log('Error deleting patient info');
    }
    else{
      console.log(result);
      res.send('Patient Deleted');
    }
  });
});


app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});