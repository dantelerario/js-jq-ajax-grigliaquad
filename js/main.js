// Griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
// DevTools console e network sono nostri amici :wink:
$(document).ready( function() {
  var apiNumbers = 'https://flynn.boolean.careers/exercises/api/random/int';
  var boxes = $('.box');

  boxes.on('click', function() {
    var self = $(this);
    $.ajax({
      url: apiNumbers,
      method: 'GET',
      success: function(data) {
        var randomNumber = data.response;
        if (randomNumber <= 5 && self.text() === '0') {
          self.addClass('yellow');
          self.text(randomNumber);
            if (randomNumber == 9) {
              self.addClass('spinClass');
            }
        } else if (randomNumber > 5 && self.text() === '0') {
          self.addClass('green');
          self.text(randomNumber);
            if (randomNumber == 9) {
              self.addClass('spinClass');
            }
        } else {
          alert('Box già cliccato');
        }
      },
      error: function () {
        alert('ERROR');
      }
    });
  });
}); /* END DOCUMENT */
