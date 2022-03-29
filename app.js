var express = require('express');
var app = express();
app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.send (4/0);
});
app.listen(process.env.PORT, function () {
  console.log('Example app listening on process.env.PORT');
});
