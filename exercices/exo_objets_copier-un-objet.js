const iphone15Pro = {
    brand: 'Apple',
    model: 'Iphone 15 Pro',
    ram: 4,
    fastcharge: true
}

const obj = {
    prop1: 'value1',
    prop2: 'value2',
}

// COPIE PAR VALEUR
let a = 10;
let b = a; // 10
a = 20;
console.log(b); // 10

// COPIE PAR REFERENCE
// Les 2 téléphones pointent vers la même référence
const iphone15ProPlus = iphone15Pro;

// Affichage du contenu de iphone15ProPlus
console.log('iphone15ProPlus :');
console.table(iphone15ProPlus);

// Passer à "false" la propriété "fastcharge" de iphone15Pro
iphone15Pro.fastcharge = false;

// Affichage du contenu de iphone15ProPlus
console.log('iphone15ProPlus :');
console.table(iphone15ProPlus);

// COPIER JUDICEUSEMENT UN OBJET avec le Spread Operator
const iphone16Pro = { ...iphone15Pro, model: 'Iphone 16 Pro', ram: 16 };

console.log('iphone15Pro:');
console.table(iphone15Pro);

console.log('iphone16Pro:');
console.table(iphone16Pro);