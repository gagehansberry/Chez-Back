const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
//const bearerToken = require('express-bearer-token');
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

  //PATIENT RECORD HTTP CALLS
//add patient 
app.get('/addpatient', (req,res) =>{
  //let patient= {name:'Evan Kosmos', phone_number: 123, address: null, insurance: null, dob: null, gender: null, care_taker:null, medications: null, appointments: null};
  let patient = {name:req.body.name, phone_number:req.body.phone_number, address:req.body.address, insurance:req.body.insurance, dob:req.body.dob, gender:req.body.gender, care_taker:req.body.care_taker, medications:req.body.medications, appointments:req.body.appointments};
  let sql = 'INSERT INTO patient_record SET ?';
  console.log(req.headers.patient);
  console.log(req.headers.phone_number);
  let query= db.query(sql, patient, (err, result) => {
    if(err){
      console.log("Could not add patient");

      res.send(req.headers.patient + " is healthy");
    }
    else{
      console.log(result);
      res.send('Patient added');
    }

  });
});

//select records by patient id
app.get('/getpatient', (req, res) =>{
  let id=req.body.id;
  let sql = `Select * FROM patient_record WHERE id= ${id}`;
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
app.get('/updatepatientname', (req, res) =>{
  let newName=req.headers.name;
  let id = req.headers.id;
  let sql = `UPDATE patient_record SET name = '${newName}' WHERE id= ${id}`;
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
app.get('/updatepatientnumber', (req, res) =>{
  let newNumber = req.headers.phone_number;
  let id= req.headers.id; 
  //let newName = 'James';
  let sql = `UPDATE patient_record SET phone_number = '${newNumber}' WHERE id= ${id}`;
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
app.get('/updatepatientaddress', (req, res) =>{
  let newAddy=req.headers.address;
  let id = req.headers.id;
  let sql = `UPDATE patient_record SET address = '${newAddy}' WHERE id= ${id}`;
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
app.get('/updatepatientinsurance', (req, res) =>{
  let newInsur =req.headers.insurance;
  let id = req.headers.id;
  let sql = `UPDATE patient_record SET insurance = '${newInsur}' WHERE id= ${id}`;
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
app.get('/updatepatientdob', (req, res) =>{
  let newDOB =req.headers.dob;
  let id = req.headers.id;
  let sql = `UPDATE patient_record SET dob = '${newDOB}' WHERE id= ${id}`;
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
app.get('/updatepatientgender', (req, res) =>{
  let newGen=req.headers.gender;
  let id= req.headers.id; 
  let sql = `UPDATE patient_record SET gender = '${newGen}' WHERE id= ${id}`;
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
app.get('/updatepatientcaretaker', (req, res) =>{
  let newCare=req.headers.care_taker;
  let id = req.headers.id;
  let sql = `UPDATE patient_record SET care_taker = '${newCare}' WHERE id= ${id}`;
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
app.get('/updatepatientmedication', (req, res) =>{
  let newMed=req.headers.medications;
  let id= req.headers.id; 
  let sql = `UPDATE patient_record SET medications = '${newMed}' WHERE id= ${id}`;
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
app.get('/updatepatientappointment', (req, res) =>{
  let newApp=req.body.appointments;
  let id=req.headers.id;
  let sql = `UPDATE patient_record SET appointments = '${newApp}' WHERE id= ${id}`;
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
app.get('/deletepatient', (req, res) =>{
  let id= req.headers.id;
  let sql = `DELETE FROM patient_record WHERE id= ${id}`;
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
//END OF PATIENT RECORD HTTP CALLS

//ECOUNTER INFO HTTP CALLS
//add encounter 
app.get('/addencounter', (req,res) =>{
  //let patient= {name:'Evan Kosmos', phone_number: 123, address: null, insurance: null, dob: null, gender: null, care_taker:null, medications: null, appointments: null};
  let patient = {name:req.body.name, phone_number:req.body.phone_number, address:req.body.address, insurance:req.body.insurance, dob:new Date(req.body.dob), gender:req.body.gender, care_taker:req.body.care_taker, medications:req.body.medications, appointments:req.body.appointments};
  let sql = 'INSERT INTO HealthTrack.encounter_info SET ?';
  let query= db.query(sql, patient, (err, result) => {
    if(err){
      console.log("Could not add encouter info :(");
      res.send('Error');
    }
    else{
      console.log(result);
      res.send('Encouter info added!');
    }

  });
});

//get all encounter info for a patient
app.get('/getencounterpatid', (req,res) =>{
 let patid = req.body.patid; 
let sql = `SELECT * FROM HealthTrack.encounter_info WHERE patient_record_id = ${patid}`;
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

//get encounter info by encouter ID
app.get('/getencounterid', (req,res) =>{
  let id = req.body.id; 
 let sql = `SELECT * FROM HealthTrack.encounter_info WHERE id = ${id}`;
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
app.get('/getencounterdate', (req,res) =>{
  //the query for the database
  date= req.body.date;
  patid = req.body.id;
  let sql = `SELECT * FROM HealthTrack.encounter_info WHERE date = ${date} AND patient_record_id = ${patid}`;
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
//END OF ENCOUNTER

//PHYSICIAN HTTP CALLS
   //add physician 
   app.get('/addphysician', (req,res) =>{
    //let physician = {name=req.body.name, phone_number= req.body.phone_number, schedule:req.body.schedule, appointments=req.body.appointments};
    let physician = {name:null, phone_number:null, schedule:null, appointments:null};
    let sql = 'INSERT INTO physician SET ?';
    let query= db.query(sql, physician, (err, result) => {
      if(err){
        console.log("Could not add physician info :(");
        res.send('Could not add physician info');
      }
      else{
        console.log(result);
        res.send('Physician info added!');
      }
  
    });
  });

//delete physician
  app.get('/deletephysician', (req, res) =>{
    let id= req.body.id;
    let sql = `DELETE FROM physician WHERE physician_id= ${id}`;
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
  //END OF PHYSICIAN

  //LAB ORDER HTTP CALLS
  //add lab order 
app.get('/addlaborder', (req,res) =>{
  //let newOrder= {name:'John', physician:'Angela', lab_test: null, date:null, technician:null, result:null, patient_record_id:1};
  let newOrder = {name:req.body.name, physician:req.body.physician, lab_test:req.body.lab_test, date:new Date(req.body.date), technician:req.body.technician, results:req.body.results};
  let sql = 'INSERT INTO HealthTrack.lab_order SET ?';
  let query= db.query(sql, newOrder, (err, result) => {
    if(err){
      console.log("Could not add lab order");
      res.send("Error");
    }
    else{
      console.log(result);
      res.send('Lab order added');
    }

  });
});

//delete lab order
app.get('/deletelaborder', (req, res) =>{
    //let newinfo = {name=req.body.name, phone_number=req.body.phone_number, address=req.body.address, insurance=req.body.insurance, dob=new Date(req.body.dob), gender=req.body.gender, care_taker=reg.body.care_taker, medications=req.body.medications, appointments=req.body.appointments;
    //let newName = 'James';
    let id = req.body.id;
    let sql = `DELETE FROM HealthTrack.lab_order WHERE id= ${id}`;
    let query =db.query(sql, (err, result) =>{
      if(err){
        console.log('Error deleting lab order');
        res.send('Could not delete lab order');
      }
      else{
        console.log(result);
        res.send('Lab order Deleted');
      }
    });
  });
//END OF LAB ORDER

//LAB TEST HTTP CALLS
//add lab test 
app.get('/addlabtest', (req,res) =>{
  let newTest = {test_type:req.body.test_type, normal_results:req.body.normal_results, bad_results:req.body.bad_results};
  let sql = 'INSERT INTO HealthTrack.lab_test SET ?';
  let query= db.query(sql, newTest, (err, result) => {
    if(err){
      console.log("Could not add lab test :(");
      res.send('Error could not add lab test');
    }
    else{
      console.log(result);
      res.send('Lab test added');
    }

  });
});

//get lab test by physician 
app.get('/getlabtestphysician', (req,res) =>{
  let physician= req.body.physician;
  let sql = `SELECT * FROM lab_test WHERE physician = ${physician}`;
  let query= db.query(sql, (err, result) => {
    if(err){
      console.log("Could not get lab test :(");
      res.send('Error');
    }
    else{
      console.log(result);
      res.send('Lab test fetched');
    }

  });
});

app.get('/getlabtesttype', (req,res) =>{
  let type= req.body.type;
  let sql = `SELECT * FROM lab_test WHERE physician = ${type}`;
  let query= db.query(sql, (err, result) => {
    if(err){
      console.log("Could not get lab test :(");
      res.send('Error');
    }
    else{
      console.log(result);
      res.send('Lab test fetched');
    }

  });
});
//END OF LAB TEST

//PHARMACY HTTP CALLS
//add pharmacy order 
app.get('/addpharm', (req,res) =>{
  let newPharm = {name:req.body.name, medication:req.body.medication, dosage:req.body.dosage, usage_amount:req.body.usage_amount, date_filled:new Date(req.body.adverse_meds), pharmacist:req.body.pharmacist};
  let sql = 'INSERT INTO pharmacy SET ?';
  let query= db.query(sql, newPharm, (err, result) => {
    if(err){
      console.log("Could not add pharmacy order");
      res.send('Could not add pharmacy order')
    }
    else{
      console.log(result);
      res.send('Pharmacy order added');
    }

  });
});

//select pharmacy order by id
app.get('/getpharmid', (req, res) =>{
  let id = req.body.id;
  let sql = `Select * FROM pharmacy WHERE id= ${id}`;
  let query =db.query(sql, (err, result) =>{
    if(err){
      console.log('Error fething pharmacy order info');
    }
    else{
      console.log(result);
      res.send('Pharmacy order info fetched');
    }
  });
});


//update perscription medication
app.get('/updatepharmmeds/:id', (req, res) =>{
  let medication = req.body.medication;
  //let newName = 'James';
  let sql = `UPDATE pharmacy SET medication = '${medication}' WHERE id= ${req.params.id}`;
  let query =db.query(sql, medication, (err, result) =>{
    if(err){
      console.log('Error updating pharmacy medication');
    }
    else{
      console.log(result);
      res.send('Pharmacy medication Updated');
    }
  });
});

//update pperscritipion dosage
app.get('/updatepharmdosage/:id', (req, res) =>{
  let dosage = req.body.dosage;
  //let newName = 'James';
  let sql = `UPDATE pharmacy SET dosage = '${dosage}' WHERE id= ${req.params.id}`;
  let query =db.query(sql, dosage, (err, result) =>{
    if(err){
      console.log('Error updating pharmacy dosage');
    }
    else{
      console.log(result);
      res.send('Pharmacy dosage updated');
    }
  });
});

//update perscription usage amount
app.get('/updatepharmusage/:id', (req, res) =>{
  let usage_amount=req.body.usage_amount;
  let sql = `UPDATE pharmacy SET usage_amoung = '${usage_amount}' WHERE id= ${req.params.id}`;
  let query =db.query(sql, usage_amount, (err, result) =>{
    if(err){
      console.log('Error updating pharmacy usage amount');
    }
    else{
      console.log(result);
      res.send('Pharmacy usage amount Updated');
    }
  });
});



//update pharmacy pharmacist
app.get('/updatepharmacist/:id', (req, res) =>{
  let pharmacist =req.body.pharmacist;
  let sql = `UPDATE pharmacy SET pharmacist = '${pharmacist}' WHERE id= ${req.params.id}`;
  let query =db.query(sql, pharmacist, (err, result) =>{
    if(err){
      console.log('Error updating pharmacist info');
    }
    else{
      console.log(result);
      res.send('pharmacist info Updated');
    }
  });
});

//Delete pharmacy order from record
app.get('/deletepharm/:id', (req, res) =>{
  let sql = `DELETE FROM pharmacy WHERE id= ${req.params.id}`;
  let query =db.query(sql, (err, result) =>{
    if(err){
      console.log('Error deleting pharmacy order');
    }
    else{
      console.log(result);
      res.send('Pharmacy order Deleted');
    }
  });
});

//add medicine order 
app.get('/addmed', (req,res) =>{
    let med = {med_name:req.body.med_name, med_descrip:req.body.med_descrip, med_rec_use:req.body.med_rec_use, side_effects:req.body.side_effects, adverse_meds:req.body.adverse_meds};
    let sql = 'INSERT INTO medicine SET ?';
    let query= db.query(sql, med, (err, result) => {
      if(err){
        console.log("Could not add medication info");
      }
      else{
        console.log(result);
        res.send('Medication info added');
      }
  
    });
  });
  //END OF PHARMACY 

  //EQUIPMENT HTTP CALLS
  //add equipment 
app.get('/addequipment', (req,res) =>{
  let newEquip = {type:req.body.type, description:req.body.description, department:req.body.department, owned_leased:req.body.owned_leased, warranty:req.body.warranty, lease_terms:req.body.lease_terms};
  let sql = 'INSERT INTO equipment SET ?';
  let query= db.query(sql, newEquip, (err, result) => {
    if(err){
      console.log("Could not add equipment");
      res.send('Could not add equipment');
    }
    else{
      console.log(result);
      res.send('Equipment added');
    }

  });
});

//get equipment by id 
app.get('/getequipmentid', (req,res) =>{
  let id = req.body.id;
  let sql = `SELECT * FROM equipment WHERE id = ${id}`;
  let query= db.query(sql, (err, result) => {
    if(err){
      console.log("Could not fetch equipment info");
      res.send('Could not fetch equipment info');
    }
    else{
      console.log(result);
      res.send('Equipment info fetched');
    }

  });
});

  //get equipment by type 
app.get('/getequipmenttype', (req,res) =>{
  let type = req.body.type;
  let sql = `SELECT * FROM equipment WHERE type = ${type}`;
  let query= db.query(sql, (err, result) => {
    if(err){
      console.log("Could not fetch equipment info");
      res.send('Could not fetch equipment info');
    }
    else{
      console.log(result);
      res.send('Equipment info fetched');
    }

  });
});

   //get equipment by department 
app.get('/getequipmentdepartment', (req,res) =>{
  let department= req.body.department;
  let sql = `SELECT * FROM equipment WHERE department = ${department}`;
  let query= db.query(sql, (err, result) => {
    if(err){
      console.log("Could not fetch equipment info");
      res.send('Could not fetch equipment info');
    }
    else{
      console.log(result);
      res.send('Equipment info fetched');
    }

  });
});
//END OF EQUIPMENT

//VENDOR HTTP CALLS
 //add vendor 
 app.get('/addvendor', (req,res) =>{
  let newVen= {name:req.body.name, ven_address:req.body.ven_address, type_equip:req.body.type_equip, preferred:req.body.preferred};
  let sql = 'INSERT INTO vendors SET ?';
  let query= db.query(sql, newVen, (err, result) => {
    if(err){
      console.log("Could not add vendor");
      res.send('Could not add vendor. ')
    }
    else{
      console.log(result);
      res.send('Vendor added');
    }

  });
});

 //get vendor by id
app.get('/getvendorid', (req,res) =>{
  let id = req.body.id;
  let sql = `SELECT * FROM vendors WHERE id = ${id}`;
  let query= db.query(sql, (err, result) => {
    if(err){
      console.log("Could not add vendor");
    }
    else{
      console.log(result);
      res.send('Vendor added');
    }

  });
});

   //get vendor by name
app.get('/getvendorname', (req,res) =>{
  let name= req.body.name;
  let sql = `SELECT * FROM vendors WHERE name = ${name}`;
  let query= db.query(sql, (err, result) => {
    if(err){
      console.log("Could not add vendor");
    }
    else{
      console.log(result);
      res.send('Vendor added');
    }

  });
});

   //get vendor by equipment type
app.get('/getvendortype', (req,res) =>{
  let type= req.body.type;
  let sql = `SELECT * FROM vendors WHERE equip_type = ${type}`;
  let query= db.query(sql, (err, result) => {
    if(err){
      console.log("Could not add vendor");
    }
    else{
      console.log(result);
      res.send('Vendor added');
    }

  });
});
//END OF VENDORS

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});