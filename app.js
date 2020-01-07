var express = require('express');
path = require('path');
bodyParser = require('body-parser');
cons = require('consolidate');
dust = require('dustjs-helpers');
pg = require('pg');
app = express();

//DB Connect String
var connect = 'postgres://medibit:123456@localhost/recipebookdb';

//Assign Dust Engine to Dust files
app.engine('dust', cons.dust);

//Set default Ext dust
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

//Set public folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});

app.get('/', function(req, res) {
  res.render('index');
});
