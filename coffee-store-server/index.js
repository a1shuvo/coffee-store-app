const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Coffee Store is running hot.....!");
});

app.listen(port, () => {
  console.log(`Coffe store app listening on port ${port}`);
});
