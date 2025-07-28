/*------------------------------------------------------------------
LES FONCTIONS
------------------------------------------------------------------*/

// Création de la fonction
// a et b sont les PARAMETRES de la fonction
function addition(a, b) {
    let somme = a + b;
    return somme;
}

// Utilisation de la fonction
// 3 et 2 sont les ARGUMENTS passés à la fonction
let resultat = addition(3, 2);
console.log('resultat = ', resultat); // resultat =  5


/*---------------------------------------------------------
Expression de fonction
----------------------------------------------------------*/
let soustraire = function soustraction(a, b) {
    let difference = a - b;
    return difference;
}

let resultat2 = soustraire(10, 8);
console.log('resultat2 = ', resultat2); // resultat2 =  2


/*---------------------------------------------------------
Fonction fléchée (depuis ES6)
----------------------------------------------------------*/

// AUCUN paramètre
const saluer = () => {
    console.log('Bonjour !');
}

saluer(); // Bonjour !


// UN SEUL paramètre
const saluer2 = (prenom) => {
    console.log(`Bienvenue ${prenom} !`);
    return `Bonjour ${prenom} !`;
}

let message = saluer2('Alice');
console.log(message);


// PLUSIEURS paramètres
const prixTTC = (prixHT, tva = 5.5) => {
    let prixFinal = prixHT + (prixHT * tva / 100);
    return prixFinal;
}

// calcul du prix TTC d'une livre soumis à la tva courante en France en 2025
let prixLivre = prixTTC(120, 10);
console.log(`Le prix TTC du livre est ${prixLivre.toFixed(2)} €.`);
// Le prix TTC du livre est 132.00 €.


// paramètre par défaut pris en compte
prixLivre = prixTTC(120);
console.log(`Le prix TTC du livre est ${prixLivre.toFixed(2)} €.`);
// Le prix TTC du livre est 126.60 €.