/*--------------------------------------------------
OPERATEURS
---------------------------------------------------*/
let a = 2;
let b = 10;
let c = 20;
let d = 30;

/*------------------------------------------------------------
 Opérateurs mathématiques
 ------------------------------------------------------------*/
let somme = a + b; // somme = 12
console.log('somme = ', somme);
let difference = d - c // difference = 10

// % se nomme "modulo" = reste de la division euclidienne (division entre 2 nombres entiers)
let modulo = 10 % 2;
console.log('modulo = ', modulo);

// Opérateur d'incrémentation
a = 2;
// a++; // a = a + 1;
console.log('a++', a++); // a++ = 2
console.log('a =', a); // a = 3

// Opérateur de décrémentation
b--; // b = b - 1;
console.log('b =', b);

/*------------------------------------------------------------
 Opérateurs de comparaison
 ------------------------------------------------------------*/
y = 5;
z = '5';

console.log('y identique à z en valeur ? :', y == z); // true
console.log('y identique à z en valeur et en type ? :', y === z); // false

let x = y + z;
console.log('x = ', x, typeof x);

let w = y / z;
console.log('w = ', w, typeof w);

/*------------------------------------------------------------
 Opérateurs logiques
 ------------------------------------------------------------*/
let isFrench = true;
let isEuropean = false;

// && signifie ET
console.log('isFrench && isEuropean :', isFrench && isEuropean); // false

// || signifie OU
console.log('isFrench || isEuropean :', isFrench || isEuropean); // true


/*------------------------------------------------------------
 Opérateur ternaire
 ------------------------------------------------------------*/
let reponse = false;
// (condition à vérifier) ? action si VRAIE : action si FAUX
let resultat = (reponse === true) ? 'Merci' : 'Dommage';
console.log('resultat =', resultat);  // Dommage


/*------------------------------------------------------------
 Opérateur de coalescence des nuls : ??
 ------------------------------------------------------------*/
let civilite = 'Madame';
let civic = null ?? civilite;
console.log('civic = ', civic); // Madame

civilite = null;
civic = 'Madame' ?? 'Monsieur';
console.log('civic = ', civic); // Madame