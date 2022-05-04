const port = process.env.PORT || 4001;

const express = require('express');

const app = express();

app.get('/calc', function (req, res) {//Get request
  let parameters = req.query;
  let op = parameters.operation;
  let number1 = 0;
  let number2 = 0;
  try {
    number1 = parseInt(parameters.numberone);
    number2 = parseInt(parameters.numbertwo);
    if ((typeof (op) === 'string') && typeof (number1) === 'number' && typeof (number2) === 'number') {
      if ((op === 'add') || (op === 'sub') || (op === 'div') || (op === 'mul')) {
        let result = calcualtion(op, number1, number2);
        res.json(result);
      }
    }
  } catch (error) {
    console.log('error')
  }
});

// function doing calcualtion
function calcualtion(op, number1, number2) {
  let result = 0;
  switch (op) {
    case 'div':
      result = number1 / number2;
      break;
    case 'mul':
      result = number1 * number2;
      break;
    case 'add':
      result = number1 + number2;
      break;
    case 'sub':
      result = number1 - number2;
      break;
  }
  return result;
}

//what port the server listening
app.listen(port, () => {
  console.log("server listening on port: " + port)
});
