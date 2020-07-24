/**
 * OBJECTIF :
 * DETERMINER UNE SOMME FINALE APRÈS DIFFÉRENTS TOURS
 * DE PERTES ET DE GAINS
 */

var sommeDepart = +input[0];
var nbDeTours = +input[1];

for (var i = 2; i < nbDeTours + 2; i++) {
    var sommes = input[i].split(' ');
    sommeDepart -= +sommes[0];
    sommeDepart += +sommes[1];
}
// Implémentez votre code ci-dessous
console.log(sommeDepart);