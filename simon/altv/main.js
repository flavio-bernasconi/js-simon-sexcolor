
var numeri = [];

var i = 0;
while(i < 6 ){
  var randomNum = Math.floor(Math.random()* 100);
  if (!numeri.includes(randomNum)) {
    numeri.push(randomNum);
    i++;
  }
  else {
    i--;
  }

}




var result = confirm( numeri );
var numeriUtente = [];
var numeriTrovati = [];
var errore = "";

function mia(){
  if ( result ) {
      for (var i = 0; i < numeri.length; i++) {
        var numeriInseriti = parseInt(prompt());
        //controlli input prompt
        if (numeriInseriti > 100 || numeriInseriti.length > 2 || isNaN(numeriInseriti)) {
          i--;
          console.log("errore di sistema",numeriInseriti);
          errore = true;
        }
        else {
          errore = false;
        }

        //se il numero inserito dall utente NON è presente allora pushalo
        if (!numeriUtente.includes(numeriInseriti) && errore == false) {
          numeriUtente.push(numeriInseriti);
          if (numeriUtente.length > numeri.length ) {
            break;
          }
        }
        else {
          i--;
        }

        //NUMERI TROVATI
        if (numeri.includes(numeriUtente[i])) {
            numeriTrovati.push(numeriUtente[i]);

        }
      }
      console.log("numeri da ricordare",numeri.sort());
      console.log("numeri inseriti dall utente",numeriUtente.sort());
      console.log("numeri trovati ",numeriTrovati.length + " : " +  numeriTrovati.sort());

    }

}


setTimeout(mia, 2000);
