const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:
let calculations = [{
  numOne: 3,
  numTwo: 5,
  operator: '+',
  result: 8
},
{
  numOne: 11,
  numTwo: 7,
  operator: '-',
  result: 4
}]


// Here's a wonderful place to make some routes:

// GET /calculations
app.get("/calculations", function(req,res){
  res.send(calculations);
})
// POST /calculations

app.post('/calculations', function(req,res){
// console.log(req.body.operator)
// let newMaths = req.body;
if (req.body.operator == "+"){
  let answer = Number(req.body.numOne) + parseInt(req.body.numTwo);
  console.log(answer);
  req.body['result'] = answer;
} else if(req.body.operator == "-"){
  let answer = Number(req.body.numOne) - parseInt(req.body.numTwo);
  console.log(answer);
  req.body['result'] = answer;
} else if(req.body.operator == "*"){
  let answer = Number(req.body.numOne) * parseInt(req.body.numTwo);
  console.log(answer);
  req.body['result'] = answer;
} else if(req.body.operator == "/"){
  let answer = Number(req.body.numOne) / parseInt(req.body.numTwo);
  console.log(answer);
  req.body['result'] = answer;
}



console.log(req.body)
calculations.push(req.body);
console.log(calculations);
res.sendStatus(201);
// Do your math here
 
})




// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5002;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
