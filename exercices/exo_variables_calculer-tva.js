const TAUX_TVA = 20;
let prixHT = 237;

let affichagePrixHT = `${prixHT.toFixed(2)} €`;
console.log('Prix HT :', affichagePrixHT);

let affichageTauxTVA = `${TAUX_TVA} %`;
console.log('Taux TVA :', affichageTauxTVA);

let affichageMontantTVA = `${(TAUX_TVA * prixHT / 100).toFixed(2)} €`;
console.log('Montant TVA :', affichageMontantTVA);

let prix_TTC = `${(prixHT * (1 + TAUX_TVA / 100)).toFixed(2)} €`;
console.log('Prix TCC :', prix_TTC);