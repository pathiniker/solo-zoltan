
$(document).ready(function() {

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

            //battle ante
            $('#ante').click(function() {

              var anteRoll = (randomNumber(1, 5));

              function randomNumber(min, max) {
                  return Math.floor(Math.random() * (max - min) + min);
              }

                $('#ante-result').text(anteRoll.toFixed());
              });//end battle ante

//single out random free-for-all
$('#select-ffa').click(function() {
$('table.free tr').hide();
for (var i = 0; i < 1; i++) {
  $('table.free tr').filter(':hidden')
               .eq(Math.floor(Math.random() * (12 - i)))
               .show();
               $('table.free td').css('background', 'linear-gradient(white, #ef3f39)');
}
});

//single out random 2v2
$('#select-twov').click(function() {
$('table.twov tr').hide();
for (var i = 0; i < 1; i++) {
  $('table.twov tr').filter(':hidden')
               .eq(Math.floor(Math.random() * (12 - i)))
               .show();
               $('table.twov td').css('background', 'linear-gradient(white, yellow)');
}
});

//single out random team
$('#select-team').click(function() {
$('table.teams tr').hide();
for (var i = 0; i < 1; i++) {
  $('table.teams tr').filter(':hidden')
               .eq(Math.floor(Math.random() * (3 - i)))
               .show();
               $('table.teams td').css('background-color', 'yellow');
}
});

//single out random game type
$('#select-type').click(function() {
$('table.game-type tr').hide();
for (var i = 0; i < 1; i++) {
  $('table.game-type tr').filter(':hidden')
               .eq(Math.floor(Math.random() * (2 - i)))
               .show();
               $('table.game-type td').css('background-color', 'yellow');

}
});

//single out 3 candies
$('#choose-candy').click(function() {
$('table.candies tr').hide();
for (var i = 0; i < 3; i++) {
  $('table.candies tr').filter(':hidden')
               .eq(Math.floor(Math.random() * (6 - i)))
               .show();
}
});



// CASINO SLOT MACHINE
  var playCount = 0;
  var jackpot = 3;
  var payout = 0;
  var totalPlays = 0;
  var regWin = 2;
  var timesRun = 0;
  var lowWin = 1;

//insert coin (reset)
$('#reset').click(function() {
  if (playCount >= 1) {
    alert("You've still got spins!");
    // jackpot--;
    // payout++;
    // playCount -=3;
    // totalPlays--;
  } else if (playCount == 0) {
  jackpot++;
  payout--;
  totalPlays++;
  playCount += 3;

  $('#jackpot').text(jackpot);
  $('#payout').text(payout);
  $('#total-plays').text(totalPlays);
  $('#yahtzeeWin').text('');
  $('#slot-count').text(playCount);
  $("#casino-page").css('background-image', 'none');
}
})

///spin
$('#spin').click(function() {
    if (playCount == 0) {
      alert('Insert coin to play!');

    } else if (playCount >= 1){
    playCount--;
    $('#yahtzeeWin').text('');
    $('#slot-count').text(playCount);
    $('.spin').empty();


    var yahtzeeSpinOne = (randomNumber(1, 4));
    var yahtzeeSpinTwo = (randomNumber(1, 4));
    var yahtzeeSpinThree = (randomNumber(1, 4));

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    ///spinOne
    if (yahtzeeSpinOne == 2) {
      $('#spin-result-one').append('<img src="../assets/images/yoshiegg.png" height="90px">');
    } else if (yahtzeeSpinOne == 1) {
      $('#spin-result-one').append('<img src="../assets/images/block3.png" height="90px">');
    } else {
      $('#spin-result-one').append('<img src="../assets/images/star.png" height="90px">');
    };

    ///spinTwo
    if (yahtzeeSpinTwo == 2) {
      $('#spin-result-two').append('<img src="../assets/images/yoshiegg.png" height="90px">');
    } else if (yahtzeeSpinTwo == 1) {
      $('#spin-result-two').append('<img src="../assets/images/block3.png" height="90px">');
    } else {
      $('#spin-result-two').append('<img src="../assets/images/star.png" height="90px">');
    };

    ///spinThree
    if (yahtzeeSpinThree == 2) {
      $('#spin-result-three').append('<img src="../assets/images/yoshiegg.png" height="90px">');
    } else if (yahtzeeSpinThree == 1) {
      $('#spin-result-three').append('<img src="../assets/images/block3.png" height="90px">');
    } else {
      $('#spin-result-three').append('<img src="../assets/images/star.png" height="90px">');
    };


    if ((yahtzeeSpinOne == yahtzeeSpinTwo && yahtzeeSpinOne == yahtzeeSpinThree) && ((yahtzeeSpinOne + yahtzeeSpinTwo + yahtzeeSpinThree) == 3)) {

      // $('#yahtzeeWin').text('Winner!');
      $('#yahtzeeWin').append('<audio src="..assets/audio/airhorn.mp3" autoplay></audio>');
      playCount = 0;
      $('#slot-count').text(playCount);
      payout = payout + lowWin;
      $('#payout').text(payout);
      // jackpot = 5;
      $('#slot-count').text('+' + lowWin);
      // $('.siren').fadeTo(fast, 0.5).;

    } else if ((yahtzeeSpinOne == yahtzeeSpinTwo && yahtzeeSpinOne == yahtzeeSpinThree) && ((yahtzeeSpinOne + yahtzeeSpinTwo + yahtzeeSpinThree) == 6)) {

        // $('#yahtzeeWin').text('Winner!');
        $('#yahtzeeWin').append('<audio src="..assets/audio/airhorn.mp3" autoplay></audio>');
        playCount = 0;
        $('#slot-count').text(playCount);
        payout = payout + regWin;
        $('#payout').text(payout);
        // jackpot = 5;
        $('#slot-count').text('+' + regWin);
        // $('.siren').fadeTo(fast, 0.5).;

    } else if ((yahtzeeSpinOne + yahtzeeSpinTwo + yahtzeeSpinThree) == 9) {
      $('#yahtzeeWin').append('<audio src="..assets/audio/cena.mp3" autoplay></audio>');
      playCount = 0;
      $('#slot-count').text(playCount);
      payout = payout + jackpot;
      $('#payout').text(payout);
      jackpot = 3;
      $('#jackpot').text(jackpot);
      $('#slot-count').text('Jackpot!');
      $("#casino-page").css('background-image', 'url("../assets/images/confetti.gif")');
      // $('#yahzteeWin').append('<img src="carlton.gif">');


    } else if (playCount == 0){
      playCount = 0;
      $('#slot-count').text(playCount);
      $('#slot-count').text('Game Over');
    }
}//end insert coin if/else

});

/// end CASINO


// counter page

// Player One
var redOne = 0;
var greenOne = 0;
var miniOne = 0;
var candyOne = 0;
var coinOne = 0;
var starOne = 0;

$('#red-one').mousedown(function(event) {
    switch (event.which) {
        case 1:
            redOne++;
            $('#red-one').text(redOne);
            break;
        case 2:
            redOne--;
            $('#red-one').text(redOne);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#green-one').mousedown(function(event) {
    switch (event.which) {
        case 1:
            greenOne++;
            $('#green-one').text(greenOne);
            break;
        case 2:
            greenOne--;
            $('#green-one').text(greenOne);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#mini-one').mousedown(function(event) {
    switch (event.which) {
        case 1:
            miniOne++;
            $('#mini-one').text(miniOne);
            break;
        case 2:
            miniOne--;
            $('#mini-one').text(miniOne);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#candy-one').mousedown(function(event) {
    switch (event.which) {
        case 1:
            candyOne++;
            $('#candy-one').text(candyOne);
            break;
        case 2:
            candyOne--;
            $('#candy-one').text(candyOne);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#coin-one').mousedown(function(event) {
    switch (event.which) {
        case 1:
            coinOne++;
            $('#coin-one').text(coinOne);
            break;
        case 2:
            coinOne--;
            $('#coin-one').text(coinOne);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#star-one').mousedown(function(event) {
    switch (event.which) {
        case 1:
            starOne++;
            $('#star-one').text(starOne);
            break;
        case 2:
            starOne--;
            $('#star-one').text(starOne);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
}); // end player one

// Player Two
var redTwo = 0;
var greenTwo = 0;
var miniTwo = 0;
var candyTwo = 0;
var coinTwo = 0;
var starTwo = 0;

$('#red-two').mousedown(function(event) {
    switch (event.which) {
        case 1:
            redTwo++;
            $('#red-two').text(redTwo);
            break;
        case 2:
            redTwo--;
            $('#red-two').text(redTwo);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#green-two').mousedown(function(event) {
    switch (event.which) {
        case 1:
            greenTwo++;
            $('#green-two').text(greenTwo);
            break;
        case 2:
            greenTwo--;
            $('#green-two').text(greenTwo);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#mini-two').mousedown(function(event) {
    switch (event.which) {
        case 1:
            miniTwo++;
            $('#mini-two').text(miniTwo);
            break;
        case 2:
            miniTwo--;
            $('#mini-two').text(miniTwo);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#candy-two').mousedown(function(event) {
    switch (event.which) {
        case 1:
            candyTwo++;
            $('#candy-two').text(candyTwo);
            break;
        case 2:
            candyTwo--;
            $('#candy-two').text(candyTwo);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#coin-two').mousedown(function(event) {
    switch (event.which) {
        case 1:
            coinTwo++;
            $('#coin-two').text(coinTwo);
            break;
        case 2:
            coinTwo--;
            $('#coin-two').text(coinTwo);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#star-two').mousedown(function(event) {
    switch (event.which) {
        case 1:
            starTwo++;
            $('#star-two').text(starTwo);
            break;
        case 2:
            starTwo--;
            $('#star-two').text(starTwo);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
}); // end player two

// Player Three
var redThree = 0;
var greenThree = 0;
var miniThree = 0;
var candyThree = 0;
var coinThree = 0;
var starThree = 0;

$('#red-three').mousedown(function(event) {
    switch (event.which) {
        case 1:
            redThree++;
            $('#red-three').text(redThree);
            break;
        case 2:
            redThree--;
            $('#red-three').text(redThree);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#green-three').mousedown(function(event) {
    switch (event.which) {
        case 1:
            greenThree++;
            $('#green-three').text(greenThree);
            break;
        case 2:
            greenThree--;
            $('#green-three').text(greenThree);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#mini-three').mousedown(function(event) {
    switch (event.which) {
        case 1:
            miniThree++;
            $('#mini-three').text(miniThree);
            break;
        case 2:
            miniThree--;
            $('#mini-three').text(miniThree);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#candy-three').mousedown(function(event) {
    switch (event.which) {
        case 1:
            candyThree++;
            $('#candy-three').text(candyThree);
            break;
        case 2:
            candyThree--;
            $('#candy-three').text(candyThree);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#coin-three').mousedown(function(event) {
    switch (event.which) {
        case 1:
            coinThree++;
            $('#coin-three').text(coinThree);
            break;
        case 2:
            coinThree--;
            $('#coin-three').text(coinThree);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#star-three').mousedown(function(event) {
    switch (event.which) {
        case 1:
            starThree++;
            $('#star-three').text(starThree);
            break;
        case 2:
            starThree--;
            $('#star-three').text(starThree);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
}); // end player three

// Player Four
var redFour = 0;
var greenFour = 0;
var miniFour = 0;
var candyFour = 0;
var coinFour = 0;
var starFour = 0;

$('#red-four').mousedown(function(event) {
    switch (event.which) {
        case 1:
            redFour++;
            $('#red-four').text(redFour);
            break;
        case 2:
            redFour--;
            $('#red-four').text(redFour);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#green-four').mousedown(function(event) {
    switch (event.which) {
        case 1:
            greenFour++;
            $('#green-four').text(greenFour);
            break;
        case 2:
            greenFour--;
            $('#green-four').text(greenFour);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#mini-four').mousedown(function(event) {
    switch (event.which) {
        case 1:
            miniFour++;
            $('#mini-four').text(miniFour);
            break;
        case 2:
            miniFour--;
            $('#mini-four').text(miniFour);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#candy-four').mousedown(function(event) {
    switch (event.which) {
        case 1:
            candyFour++;
            $('#candy-four').text(candyFour);
            break;
        case 2:
            candyFour--;
            $('#candy-four').text(candyFour);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#coin-four').mousedown(function(event) {
    switch (event.which) {
        case 1:
            coinFour++;
            $('#coin-four').text(coinFour);
            break;
        case 2:
            coinFour--;
            $('#coin-four').text(coinFour);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
$('#star-four').mousedown(function(event) {
    switch (event.which) {
        case 1:
            starFour++;
            $('#star-four').text(starFour);
            break;
        case 2:
            starFour--;
            $('#star-four').text(starFour);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
}); // end player four


// turn counter
var turnCount = 0;
$('#turn-count').mousedown(function(event) {
    switch (event.which) {
        case 1:
            turnCount++;
            $('#turn-count').text(turnCount);
            break;
        case 2:
            turnCount--;
            $('#turn-count').text(turnCount);
            break;
        case 3:
            break;
        default:
            alert('You have a strange Mouse!');
    }
});

// end counter page

// BOWSER PAGE
var giveTake = 0;
var quantity = 0;
var trader = 0;

$('#bowser-button').click(function() {

$('.b-spin').empty();

  var giveTake = (randomNumber(1, 3));
  var quantity = (randomNumber(1, 4));
  var trader = (randomNumber(1, 6));


  function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
  }


  /// giveTake
  if (giveTake == 1) {
    $('#give-take').append('<img src="../assets/images/backward.png">');
  } else if (giveTake == 2) {
    $('#give-take').append('<img src="../assets/images/forward.png">');
  };

  /// quantity
  if (quantity == 1){
    $('#quantity').append('<img src="../assets/images/coin.png">');
  } else if (quantity == 2){
    $('#quantity').append('<img src="../assets/images/coin.png"><img src="../assets/images/coin.png">');
  } else if (quantity == 3){
    $('#quantity').append('<img src="../assets/images/coin.png"><img src="../assets/images/coin.png"><img src="../assets/images/coin.png">');
  };

  /// trader
  if (trader == 1) {
    $('#trader').text('P1');
  } else if (trader == 2) {
    $('#trader').text('P2');
  } else if (trader == 3) {
    $('#trader').text('P3');
  } else if (trader == 4) {
    $('#trader').text('P4');
  } else if (trader == 5) {
    $('#trader').append('<img src="http://orig11.deviantart.net/5a26/f/2016/081/2/c/bowser_head_smash_bros__series_icon_by_mrthatkidalex24-d9w2gbb.png">');
  };





}); // end Bowser button

// END BOWSER PAGE

// ----------- CURRENT PLAYER DISPLAY ----------- //


    }) //end doc ready
