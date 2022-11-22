var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world！');
});

let port = 8080;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`) 
});