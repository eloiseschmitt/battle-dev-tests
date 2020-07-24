/**
 * OBJECTIF :
 * CREER UN OBJET
 * PARCOURIR ET TRIER DES VALEURS DE CET OBJET
 * CONDITIONS MULTIPLES
 */

let lgtotal = 0;
let firstLetter = '';
let lastLetter = '';
let listeRallonges = {};
let index;
let greatestLg = 0;

for (let i = 1; i < parseInt(input[0]) + 1; i++) {
    let arrayRallonge = input[i].split(' ');
    listeRallonges[i] = {
        index: i,
        type: arrayRallonge[0],
        lg: arrayRallonge[1]
    }
}

for (rallonge in listeRallonges) {
    if (parseInt(listeRallonges[rallonge].lg) > greatestLg) {
        greatestLg = parseInt(listeRallonges[rallonge].lg);
        var arrayType = listeRallonges[rallonge].type.split('-');
        firstLetter = arrayType[0];
        lastLetter = arrayType[1];
        index = listeRallonges[rallonge].index;
    }
}
delete (listeRallonges[index]);
lgtotal += greatestLg;
greatestLg = 0;

while (Object.keys(listeRallonges).length > 0) {
    for (rallonge in listeRallonges) {
        var arrayType = listeRallonges[rallonge].type.split('-');
        console.log(parseInt(listeRallonges[rallonge].lg));
        if (arrayType[0] != lastLetter && parseInt(listeRallonges[rallonge].lg) > greatestLg) {
            greatestLg = parseInt(listeRallonges[rallonge].lg);
            index = listeRallonges[rallonge].index;
        } else {
            index = listeRallonges[rallonge].index;
        }
    }
    //console.log(index);
    var arraylastLetter = listeRallonges[index].type.split('-');
    lastLetter = arraylastLetter[1];
    delete (listeRallonges[index]);
    lgtotal += greatestLg;
    greatestLg = 0;
}
//&& arrayType[1] != firstLetter

console.log(lgtotal);