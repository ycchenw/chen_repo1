var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/index1.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index1.htm" );
})

app.get('/top.html', function (req, res) {
   res.sendFile( __dirname + "/" + "top.html" );
})

app.get('/canvas_rect.html', function (req, res) {
   res.sendFile( __dirname + "/" + "canvas_rect.html" );
})

app.get('/import_excel.html', function (req, res) {
   res.sendFile( __dirname + "/" + "import_excel.html" );
})

app.get('/process_get', function (req, res) {

   // Prepare output in JSON format
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})