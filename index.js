const express = require('express')
const app = express()
app.use(bodyParser.json());

const sayHi = (req, res) => {
  res.send("Hi!");
};

app.get("/", sayHi);

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send(`The sum is: ${a + b}`);
});
app.listen(process.env.PORT || 3000)