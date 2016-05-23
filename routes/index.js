var express = require('express');
var router = express.Router();
var pg = require('pg').native;
var connectionString = "/var/run/postgresql swen303marketplace";

var client = new pg.Client(connectionString);
client.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

// asdfasdf
router.get('/listing/:id', function(req, res, next) {
  id = req.params.id;

  // Do pre-fetch work


  // Do database pull


  // Process data for view




  // Pipe data to view
  res.render('listing', {
    id: id,
    title: 'Express'
  });
});

/* sdfgdfg*/
router.get('/create', function(req, res, next) {
  res.render('create');
});

/* sdtytyjfugy */
router.post('/login', function(req, res, next) {
  var results = [];

  var data = {email: req.body.email,name: req.body.name};
  console.log(data.email);
  console.log(data.name);

  // Pipe to database insert
  //code 1
  client.query("INSERT INTO m_user(email, name) values($1, $2) Returning *",
    [data.email,
      data.name,
    ], function(err, res) {
        if(err){
          return console.error(err);
        }
    });

    var query = client.query("SELECT id FROM m_user WHERE email = $1;",[data.email]);
    // Stream results back one row at a time
    query.on('row', function(row) {
        results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', function() {
        return res.json(results);
    });
});

/* sdtytyjfugy */
router.post('/create', function(req, res, next) {
  // Parse/validate (optional) form data
  // userid = req.forms[0]['userID']

  console.log(req.body);
  // Pipe to database insert
  //code 1
  client.query("INSERT INTO listings(userid, title, category, description, imageurl, price) values($1, $2, $3, $4, $5, $6) Returning *",
    [req.body.userID,
      req.body.title,
      parseInt(req.body.category),
      req.body.description,
      req.body.image,
      req.body.price
    ], function(err, res) {
        if(err){
          return console.error(err);
        }
        // Pull result
        var id = res.id;
        res.redirect('/listing/' + id);
    });
});

//s dfndnlk
router.get('/category/:id', function(req, res, next) {
  id = req.params.id;

  // Do pre-fetch work


  // Do category database pull



  // Do listings database pull


  // Process data for view




  // Pipe data to view
  res.render('category', {
    //name: ?,
    //listings: arr?
  });
});

module.exports = router;
