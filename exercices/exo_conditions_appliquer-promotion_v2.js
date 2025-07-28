// Constantes pour les pourcentages de réduction
const REDUCTION_MEMBRE_PLUS_100 = 0.20;  // 20%
const REDUCTION_MEMBRE_OU_200 = 0.10;    // 10%
const REDUCTION_PREMIER_ACHAT = 0.05;    // 5%
const REDUCTION_CODE_PROMO = 0.15;       // 15%

// Variables d'entrée
let montantAchat = 201;
let estMembre = false;
let codePromo = 'BLACKFRIDAY-3575';
let premierAchat = false;

// Variables pour le calcul
let tauxReduction = 0;
let montantReduction = 0;
let prixFinal = montantAchat;

// Vérifier d'abord le code promo car non cumulable
if (codePromo === 'BLACKFRIDAY-3574') {
    tauxReduction = REDUCTION_CODE_PROMO;
} else {
    // Calculer la réduction de base
    if (estMembre && montantAchat > 100) {
        tauxReduction = REDUCTION_MEMBRE_PLUS_100;
    } else if (estMembre || montantAchat > 200) {
        tauxReduction = REDUCTION_MEMBRE_OU_200;
    }

    // Ajouter la réduction pour premier achat si applicable
    if (premierAchat) {
        tauxReduction += REDUCTION_PREMIER_ACHAT;
    }
}

// Calculer les montants finaux
montantReduction = montantAchat * tauxReduction;
prixFinal = montantAchat - montantReduction;

// Affichage des résultats
console.log(`Prix initial : ${montantAchat.toFixed(2)} €`);
console.log(`Réduction (${(tauxReduction * 100)}%) : ${montantReduction.toFixed(2)} €`);
console.log(`Prix à payer : ${prixFinal.toFixed(2)} €`);