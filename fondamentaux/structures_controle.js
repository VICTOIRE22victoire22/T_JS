/*--------------------------------------------------
STRUCTURES DE CONTROLE
---------------------------------------------------*/

// IF
let traficlight = 'greeen';

if (traficlight === 'red') {
    console.log('Stop !');
}

// IF .... ELSE IF ... ELSE
if (traficlight === 'orange') {
    console.log('Ralentissez !');
} else if (traficlight === 'green') {
    console.log('Continuez !');
} else if (traficlight === 'red') {
    console.log('Stop !');
} else {
    console.log('Le feu est en panne !');
}

// TERNAIRE équivalent à IF ... ELSE
let message = (traficlight === 'green') ? 'Allez-y !' : 'Soyez vigilent !';
console.log('message =', message);  // Soyez vigilent !

// SWITCH
let day = 'toto';

switch (day) {
    case 'monday':
        console.log('Lundi');
        break;
    case 'tuesday':
        console.log('Mardi');
        break;
    case 'wednesday':
        console.log('Mercredi');
        break;
    case 'thursday':
        console.log('Jeudi');
        break;
    case 'friday':
        console.log('Vendredi');
        break;
    default:
        console.log('Weekend !');
}


// Portée (scope)

// let a une portée de bloc
// var a une portée globale

let a = 10;

if (a > 5) {
    let bonus = 2;
}
a = a + bonus;

console.log('a = ', a);
