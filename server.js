const express = require('express');

const app = express();

app.use(express.static(__dirname + '/'));

app.listen(3000, () => {
  console.log("Server running @ 3000");
});

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/index.html");
})
