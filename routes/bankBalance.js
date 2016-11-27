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

    client.query('SELECT * FROM bank', function(err, result){
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

router.put('/', function(req, res){
var balance = req.body.balance;
var id = req.params.id;
// console.log(amount);

    pool.connect(function(err, client, done){
        try{
        if(err){
            console.log('Error connecting to the DB', err);
            res.sendStatus(500);

            return;
        }

    client.query('UPDATE bank SET balance = $1 RETURNING *;',
        [balance], function(err, result){
            if(err){
            console.log('Error querying database',err);
            res.sendStatus(500);

      } else {
        res.send(result.rows);
}
});

} finally {
    done();
    }
  });
});








module.exports = router;
