const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
//const bearerToken = require('express-bearer-token');
//const events = require('./physician');
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

  //test connection to table encounter_info //THIS TEST PASSED 5:22 pm 10/30
  /*
  app.get('/test1', (req,res) =>{
    //let patient= {name:'Evan Kosmos', phone_number: 123, address: null, insurance: null, dob: null, gender: null, care_taker:null, medications: null, appointments: null};
    //let patient = {name=req.body.name, phone_number=req.body.phone_number, address=req.body.address, insurance=req.body.insurance, dob=new Date(req.body.dob), gender=req.body.gender, care_taker=reg.body.care_taker, medications=req.body.medications, appointments=req.body.appointments};
    //let patient = {date:null, physician: 'Tim', pat_complaints:null, vitals:null, notes: null, lab_orders:null, pharmacy_orders:null};
    let sql = 'SELECT * FROM HealthTrack.encounter_info;';
    let query= db.query(sql, (err, result) => {
      if(err){
        console.log("Not connected to Table");
      }
      else{
        console.log(result);
        res.send('Conntect to table');
      }
  
    });
  });
*/

//add encounter 
app.get('/addencounter', (req,res) =>{
    //let patient= {name:'Evan Kosmos', phone_number: 123, address: null, insurance: null, dob: null, gender: null, care_taker:null, medications: null, appointments: null};
    //let patient = {name=req.body.name, phone_number=req.body.phone_number, address=req.body.address, insurance=req.body.insurance, dob=new Date(req.body.dob), gender=req.body.gender, care_taker=reg.body.care_taker, medications=req.body.medications, appointments=req.body.appointments};
    let patient = {date:'2019/4/6', physician:'Tim', pat_complaints:null, vitals:null, notes:null, lab_orders:null, pharmacy_orders:null, diangnosis:null, treament_plan:null, referral:null, follow_up:null};
    let sql = 'INSERT INTO HealthTrack.encounter_info SET ?';
    let query= db.query(sql, patient, (err, result) => {
      if(err){
        console.log("Could not add encouter info :(");
        res.send('Dre ur a bitch');
      }
      else{
        console.log(result);
        res.send('Encouter info added!');
      }
  
    });
  });

//get encounter info by id
app.get('/getencounter/:id/:patient_record_id', (req,res) =>{
  let sql = `SELECT * FROM HealthTrack.encounter_info WHERE id = ${req.params.id} AND patient_record_id = ${req.params.patient_record_id}`;
  let query= db.query(sql, (err, result) => {
    if(err){
      console.log("Error getting Encounter info");
    }
    else{
      console.log(result);
      res.send('Encounter info retrieved');
    }

  });
});

//get encounter info by date
app.get('/getencounterdate/:date/:patient_record_id', (req,res) =>{
    //the query for the database
    let sql = `SELECT * FROM HealthTrack.encounter_info WHERE date = ${req.params.date} AND patient_record_id = ${req.params.patient_record_id}`;
    let query= db.query(sql, (err, result) => {
      if(err){
        console.log("Error getting Encounter info");
      }
      else{
        console.log(result);
        res.send('Encounter info retrieved');
      }
  
    });
  });

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });