var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'zoltan'
};


// initialize the database connection pool
var pool = new pg.Pool(config);

router.get('/', function(req, res){

  // err - an error object, will be not-null if there was an error connecting
  //       possible errors, db not running, config is wrong

  // client - object that is used to make queries against the db

  // done - function to call when you're done (returns connection back to the pool)
  pool.connect(function(err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }

    // 1. SQL string
    // 2. (optional)  input parameters
    // 3. callback function to execute once the query is finished
    //      takes an error object and a result object as args
    client.query('SELECT * FROM player ORDER BY player_num', function(err, result){
      done();
      if (err) {
        console.log('Error querying the DB', err);
        res.sendStatus(500);
        return;
      }
 // WHERE id > (SELECT MAX(id) - 4 FROM player)
      console.log('Got rows from the DB:', result.rows);
      res.send(result.rows);
    });
  });
});

router.get('/:id', function(req, res) {
  pool.connect(function(err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }
    client.query('SELECT * FROM player WHERE id = $1;', [req.params.id], function(err, result){
      done();
      if (err) {
        console.log('Error querying the DB', err);
        res.sendStatus(500);
        return;
      }

      console.log('Got rows from the DB:', result.rows);
      res.send(result.rows);
    });
  });
});

router.post('/', function(req, res){
  console.log('GOT REQ.BODY', req.body);
  pool.connect(function(err, client, done){
    if (err) {
      console.log('Error connecting the DB', err);
      res.sendStatus(500);
      done();
      return;
    }


    client.query('INSERT INTO player (name, character, player_num) VALUES ($1, $2, $3) returning *;',
                 [req.body.name, req.body.character, req.body.player_num],
                 function(err, result){
                   done();
                   if (err) {
                     console.log('Error querying the DB', err);
                     res.sendStatus(500);
                     return;
                   }
                   console.log('Got rows from the DB:', result.rows);
                   res.send(result.rows);
                 });
  });
});

module.exports = router;
