var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'zoltan'
};

var pool = new pg.Pool(config);


router.get('/', function(req, res){


  pool.connect(function(err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }

    client.query('SELECT * FROM ffa', function(err, result){
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
