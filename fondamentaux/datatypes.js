/*--------------------------------------------------
TYPES DE DONNEES
---------------------------------------------------*/

// Type string
let firstname = 'Alice';
console.log('Type de donnée de la variable Alice :', typeof firstname); // string

// Type number
let age = 24;
console.log('Type de donnée de la variable age :', typeof age); // number

// Type booléen
let isFrench = true;
let isMan = false;
console.log('Type de donnée de la variable isFrench :', typeof isFrench); // boolean
console.log('Type de donnée de la variable isMan :', typeof isMan); // boolean

// Type undefined
console.log('Type de donnée de la variable data :', typeof data); // undefined

// Type null
let lastname = null;
console.log('Type de donnée de la variable lastname :', typeof lastname); // object

// Type bigint
let big = 12345678987627126512124436556n;
console.log('Type de donnée de la variable big :', typeof big); // bigint

// Type symbol
let customer1 = Symbol('Bob');
let customer2 = Symbol('Bob');
console.log('customer1 identique à customer 2 ? :', customer1 === customer2); // false

// Concaténation (assemblage) de chaînes de caractères

// Méthode n°1 : opérateur de concaténation +
let phrase = firstname + ' a ' + age + ' ans.'; // Alice a 24 ans.
console.log('Phrase concaténée :', phrase);

// Méthode n°2 : template litteral (backticks : Alt Gr + 7)
phrase = `${firstname} a ${age} ans.`;
console.log('Phrase concaténée :', phrase); // Alice a 24 ans.

// Type objet litteral

const customer = {
    fisrtname: 'Charlie',
    age: 32,
    isEuropean: false,
    address: {
        country: 'USA',
        city: 'Ewa Beach',
        zipcode: 96706,
        street: '271 Indiana Avenue'
    }
}

console.log('Prénom du client : ', customer.fisrtname); // Charlie
console.log('Age du client : ', customer.age); // 32
console.log('Européen ? : ', customer.isEuropean); // false 
console.log('Pays : ', customer.address.country); // USA 
console.log('Zipcode : ', customer.address.zipcode); // 96706