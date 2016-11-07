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

    client.query('SELECT * FROM player ORDER BY player_num', function(err, result){
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

// UPDATE COUNTER

router.put('/:id', function(req, res){
console.log('READING UPDATE COUNTER', req.body);

var red = req.body.red;
var green = req.body.green;
var minigame = req.body.minigame;
var candy = req.body.candy;
var coins = req.body.coins;
var stars = req.body.stars;
var id = req.params.id;

    pool.connect(function(err, client, done){
        try{
        if(err){
            console.log('Error connecting to the DB', err);
            res.sendStatus(500);

            return;
        }

    client.query('UPDATE player SET red = $1, green = $2, minigame = $3, candy = $4, coins = $5, stars = $6 WHERE id = $7 RETURNING *;',
        [red, green, minigame, candy, coins, stars, id], function(err, result){
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


// --------- CLEAR TABLE ----------- //
router.delete('/', function(req, res) {
  pool.connect(function(err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }
    client.query('TRUNCATE TABLE player', function(err, result){
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
