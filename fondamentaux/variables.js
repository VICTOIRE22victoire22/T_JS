/*--------------------------------------------------
VARIABLES
---------------------------------------------------*/
'use strict';

/*--------------------------------------------------
var (à eviter)
---------------------------------------------------*/
console.log('--------------------------------------');
console.log('var');
console.log('--------------------------------------');
var a = 5;
console.log('Contenu de la variable a :', a);
var a = 10;
console.log('Contenu de la variable a :', a);


/*--------------------------------------------------
let
- permet de modifier le contenu d'une variable
---------------------------------------------------*/
console.log('\n------------------------------------');
console.log('let');
console.log('--------------------------------------');
let b = 6;
console.log('Contenu de la variable b :', b);
b = 12;
console.log('Contenu de la variable b :', b);
b = a; // on assigne la valeur contenue dans 'a' à la variable 'b'
console.log('Contenu de la variable b :', b);

/*--------------------------------------------------
const
- assigne une valeur qui ne peut pas être modifiée
---------------------------------------------------*/
console.log('\n------------------------------------');
console.log('const');
console.log('--------------------------------------');
const c = 100;
// c = 200; génère une erreur !
console.log('Contenu de la constante c :', c);