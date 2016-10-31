$(document).ready(function(){

//dice roll
  $('#roll').click(function() {
      var diceRoll = (randomNumber(1, 11));

      function randomNumber(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
      }

      $('#roll-result').text(diceRoll.toFixed());
  }); //end #roll

  //two dice roll
  $('#game').click(function() {
      var twoDiceRoll = (randomNumber(1, 13));

      function randomNumber(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
      }

      $('#game-result').text(twoDiceRoll.toFixed());

  }); //end #twodice

    //green roll
    $('#green-result').click(function() {
        var greenRoll = (randomNumber(1, 7));

        function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }

        $('#green-result').text(greenRoll.toFixed());
      });//end green roll


}); // end doc ready
