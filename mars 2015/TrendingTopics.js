/**
 * OBJECTIF :
 * PARCOURIR UNE LISTE DE MOTS ET DETERMINER SI UN MOT REVIENS + DE 40 FOIS TOUS LES 60 MOTS
 * (PAS TOUT À FAIT CORRECT...)
 */

var nbHashtags = +input[0];
var trend = '';
var prev = '';
var occurence = 0;
var arrayHashtags = []

for(let i=1 ; i<nbHashtags+1 ; i++) {
  arrayHashtags.push(input[i]);
}

while(arrayHashtags.length >= 0) {
  var copieArray = arrayHashtags;
  copieArray.sort();

   for (let j = 0; j < 60; j++) {
    if(copieArray[j] !== prev) {
      prev = copieArray[j];
    } else {
      occurence++;
      if(occurence >= 40) {
        return console.log(copieArray[j]);
      }
    }
  } 
  prev = '';
  occurence = 0;
  arrayHashtags.splice(0, 59);
}

trend = "Pas de trending topic";
console.log(trend);