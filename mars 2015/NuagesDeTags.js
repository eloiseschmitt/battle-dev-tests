/**
 * OBJECTIF :
 * CLASSER UN TABLEAU - SORTIR LES VALEURS LES + ELEVÉES
 * RETOUR D'UNE CHAINE DE CARATÈRE AVEC UN NB MAX DE VALEURS
 */

var tags = [];
var numbers = [];
var prev;
var arrayValues = [];
var result = '';

for (var i = 1; i < input.length; i++) {
    arrayValues.push(input[i]);
}

arrayValues.sort();

for (var i = 0; i < arrayValues.length; i++) {
    if (arrayValues[i] !== prev) {
        tags.push(arrayValues[i]);
        numbers.push(1);
    } else {
        numbers[numbers.length - 1]++;
    }
    prev = arrayValues[i];
}

var higherNumber;
var index;

for (var i = 0; i < 5; i++) {
    higherNumber = Math.max(...numbers);
    index = numbers.indexOf(higherNumber);
    result += tags[index] + ' ' + numbers[index] + '\n';
    numbers.splice(index, 1);
    tags.splice(index, 1);
}

console.log(result);