
var numeri = [];

for (var i = 0; i < 6; i++) {
  var randomNum = Math.floor(Math.random()* 100);
  if (!numeri.includes(randomNum)) {
    numeri.push(randomNum);
  }
  else {
    i--;
  }
}

var result = confirm( numeri );
var numeriUtente = [];
var numeriTrovati = [];
var numeriNonTrovati = [];

function mia(){
  if ( result ) {
      for (var i = 0; i < numeri.length; i++) {
        var numeriInseriti = parseInt(prompt());
        numeriUtente.push(numeriInseriti);

        if (numeri.includes(numeriUtente[i])) {
          numeriTrovati.push(numeriUtente[i]);
        }
        else {
          numeriNonTrovati.push(numeriUtente[i]);
        }
      }
      console.log("numeri da ricordare",numeri.sort());
      console.log("numeri inseriti dall utente",numeriUtente.sort());
      console.log("numeri trovati ",numeriTrovati.length + " : " +  numeriTrovati.sort());
      // console.log("numeri non trovati: ",numeriNonTrovati.sort());
      // console.log("numeri trovati: ",numeriTrovati.length);
      // console.log("numeri non trovati: ",numeriNonTrovati.length);


    }

}


setTimeout(mia, 8000);
