/*------------------------------------------------------------------
LES BOUCLES
------------------------------------------------------------------*/

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
console.log(cars.length); // 6

/*-------------------------------------------------------------------
FOR
-------------------------------------------------------------------*/
console.log('\nBOUCLE FOR :');

for (let i = 0; i < cars.length; i++) {
    let phrase = `Voiture située à l'indice ${i} : ${cars[i]}`;
    console.log(phrase);
}

/*-------------------------------------------------------------------
WHILE
-------------------------------------------------------------------*/
console.log('\n\nBOUCLE WHILE :');
let j = 0;
while (j < 6) {
    let phrase = `Voiture n° ${j + 1} : ${cars[j]}`;
    console.log(phrase);
    j++;
}


/*-------------------------------------------------------------------
FOR...OF (pour les tableaux)
-------------------------------------------------------------------*/
console.log('\n\nBOUCLE FOR...OF :');
for (const car of cars) {
    console.log('Voiture : ', car);
}


/*-------------------------------------------------------------------
FOR...IN (pour les objets)
-------------------------------------------------------------------*/
console.log('\n\nBOUCLE FOR...IN :');

const obj = {
    marque: 'Toyota',
    manuelle: false,
    année: 2024
}

for (const key in obj) {
    console.log('Propriété (clé) :', key, ' | valeur :', obj[key]);
}


/*-------------------------------------------------------------------
FOREACH 
-------------------------------------------------------------------*/
console.log('\n\nBOUCLE FOREACH :');