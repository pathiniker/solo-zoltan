var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'zoltan'
};


var pool = new pg.Pool(config);

router.get('/', function(req, res){
console.log('Communicated with currentTurn Route');



  pool.connect(function(err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }

    client.query('SELECT * FROM turncount', function(err, result){
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

// UPDATE TURN

router.put('/:id', function(req, res){
console.log('READING TURN COUNTER', req.body);

var turn = req.body.turn_num;
var id = req.params.id;

    pool.connect(function(err, client, done){
        try{
        if(err){
            console.log('Error connecting to the DB', err);
            res.sendStatus(500);

            return;
        }

    client.query('UPDATE turncount SET turn_num = $1 WHERE id = $2 RETURNING *;',
        [turn, id], function(err, result){
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

// --------- RESET TURN ----------- //
router.delete('/', function(req, res) {
  pool.connect(function(err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }
    client.query('TRUNCATE TABLE turncount', function(err, result){
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

// ------- BEGIN GAME --------- //
router.post('/', function(req, res){
  console.log('GOT REQ.BODY', req.body);
  pool.connect(function(err, client, done){
    if (err) {
      console.log('Error connecting the DB', err);
      res.sendStatus(500);
      done();
      return;
    }


    client.query('INSERT INTO turncount VALUES (1) returning *;',
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
