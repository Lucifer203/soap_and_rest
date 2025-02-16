const express = require('express');
const app = express();
const port = 8002;

// Middleware to parse JSON 
app.use(express.json());


app.get('/calculate', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const operation = req.query.operation;
  let result;

  // Perform the calculation based on the operation
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num2 !== 0 ? num1 / num2 : Infinity;
      break;
    default:
      result = 0;
  }

  res.json({ result });
});

app.listen(port, () => {
  console.log(`REST API listening on http://localhost:${port}`);
});
