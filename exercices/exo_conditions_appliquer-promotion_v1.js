// Créez un système de réduction pour un magasin avec les règles suivantes:

// 1. Variables à utiliser:
// - montantAchat(nombre)
//     - estMembre(booléen)
//     - codePromo(chaîne)
//     - premierAchat(booléen)

// 2. Règles de réduction:
// - 20 % si membre ET montant > 100€
// - 10 % si membre OU montant > 200€
// - 5 % supplémentaire si premier achat
//     - 15 % si code promo 'BLACKFRIDAY-3574'(non cumulable avec les autres réductions)

// 3. Affichez le montant de la réduction et le prix final

// Testez avec différentes combinaisons de valeurs


let montantAchat = 201;
let estMembre = false;
let codePromo = 'BLACKFRIDAY-3575';
let premierAchat = false;
let reduction = 0; // déclaration + initialisation
let prixAPayer; // déclacation seule sans initialisation

// Je suis membre ET mon achat dépasse 100 €
if (estMembre && montantAchat > 100) {
    prixAPayer = montantAchat - (montantAchat * 20 / 100);
    reduction = montantAchat * 20 / 100;
}

// Je suis membre OU mon achat dépasse 200 €
else if (estMembre || montantAchat > 200) {
    prixAPayer = montantAchat - (montantAchat * 10 / 100);
    reduction = montantAchat * 10 / 100;
}

// C'est mon premier achat dans ce magasin ET je suis membre ET mon achat dépasse 100 €
else if (premierAchat && (estMembre && montantAchat > 100)) {
    prixAPayer = montantAchat - (montantAchat * 20 / 100);
    prixAPayer = montantAchat - (montantAchat * 5 / 100);
    reduction = montantAchat - prixAPayer;
}

// C'est mon premier achat dans ce magasin ET je suis membre OU mon achat dépasse 200 €
else if (premierAchat && (estMembre || montantAchat > 200)) {
    prixAPayer = montantAchat - (montantAchat * 20 / 100);
    prixAPayer = montantAchat - (montantAchat * 5 / 100);
    reduction = montantAchat - prixAPayer;
}
// Je dispose d'un code promo
else if (codePromo === 'BLACKFRIDAY-3574') {
    prixAPayer = montantAchat - (montantAchat * 15 / 100);
    reduction = montantAchat * 15 / 100;
}

// Aucune des conditions précédentes n'est satisfaite
else {
    prixAPayer = montantAchat;
}

console.log(`Prix initial : ${montantAchat.toFixed(2)} €`);
console.log(`Réduction : ${reduction.toFixed(2)} €`);
console.log(`Prix à payer : ${prixAPayer.toFixed(2)} €`);
