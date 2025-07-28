/*--------------------------------------------------------
Menu du restaurant
--------------------------------------------------------*/

const entrees = [
    { id: 101, nom: "🥗 Salade César", prix: 8 },
    { id: 102, nom: "🍲 Soupe du jour", prix: 7 },
    { id: 103, nom: "🍤 Crevettes grillées", prix: 10 },
    { id: 104, nom: "🧀 Assiette de fromages", prix: 9 }
];

const plats = [
    { id: 201, nom: "🍕 Pizza Margherita", prix: 12 },
    { id: 202, nom: "🍔 Burger", prix: 15 },
    { id: 203, nom: "🍝 Pâtes Carbonara", prix: 14 },
    { id: 204, nom: "🥩 Steak", prix: 20 }
];

const desserts = [
    { id: 301, nom: "🍰 Gâteau au chocolat", prix: 6 },
    { id: 302, nom: "🍨 Glace vanille", prix: 5 },
    { id: 303, nom: "🍓 Tarte aux fraises", prix: 7 },
    { id: 304, nom: "🍮 Crème caramel", prix: 6 }
];

const boissons = [
    { id: 401, nom: "🥤 Soda", prix: 3 },
    { id: 402, nom: "☕ Café", prix: 2 },
    { id: 403, nom: "🍵 Thé", prix: 2 },
    { id: 404, nom: "🍹 Cocktail", prix: 8 }
];

const commandes = []; // Tableau pour stocker les commandes


/*--------------------------------------------------------
Afficher les éléments d'une catégorie
--------------------------------------------------------*/

const start = () => {
    console.log('------------------------------------------------');
};

const end = () => {
    console.log('------------------------------------------------\n');
}

const makeTitle = (titre) => {
    start();
    console.log(titre);
    end();
};

makeTitle('Bienvenue dans notre restaurant !');

/*------------------------------------------------------
PARTIE N°1
------------------------------------------------------*/

makeTitle('PARTIE N°1');

// QUESTION 1 : afficher (en console) les informations de la Salade César, de la pizza Margherita, du gâteau au chocolat et du café.
const idSaladeCesar = entrees[0].id;
const saladeCesar = entrees[0].nom;
const prixSaladeCesar = entrees[0].prix;

const idPizzaMargherita = plats[0].id;
const pizzaMargherita = plats[0].nom;
const prixPizzaMargherita = plats[0].prix;

const idGateauChocolat = desserts[0].id;
const gateauChocolat = desserts[0].nom;
const prixGateauChocolat = desserts[0].prix;

const idCafe = boissons[1].id;
const cafe = boissons[1].nom;
const prixCafe = boissons[1].prix;

start();
console.log(`${idSaladeCesar} - ${saladeCesar} : ${prixSaladeCesar} €`);
console.log(`${idPizzaMargherita} - ${pizzaMargherita} : ${prixPizzaMargherita} €`);
console.log(`${idGateauChocolat} - ${gateauChocolat} : ${prixGateauChocolat} €`);
console.log(`${idCafe} - ${cafe} : ${prixCafe} €`);
end();


// QUESTION 2 : prix du menu (Salade César + Pâtes Carbonara + Gâteau au chocolat + Café
const prixMenu = prixSaladeCesar + prixPizzaMargherita + prixGateauChocolat + prixCafe;
start();
console.log(`Menu:\n\n${saladeCesar} \n${pizzaMargherita} \n${gateauChocolat} \n${cafe} \n\n${prixMenu} €`);
end();

// QUESTION 3 : Ajoutez "🍔 Burger" à la liste de commandes (tableau `commandes`) initialement vide.

commandes.push(plats[1]);
start();
console.log('Commande en cours :');
console.log(`${commandes[0].nom} ${commandes[0].prix} €`);
end();

// QUESTION 4 : Ajoutez "🍤 Crevettes grillées" à la liste de commandes (tableau `commandes`)
commandes.push(entrees[2]);
start();
console.log('Commande en cours :');
console.log(`${commandes[0].nom} ${commandes[0].prix} €`);
console.log(`${commandes[1].nom} ${commandes[1].prix} €`);
end();

// QUESTION 5 : Calculer le prix total de la commande précédente.
const prixTotal = commandes[0].prix + commandes[1].prix;
start();
console.log('Commande en cours :');
console.log(`${commandes[0].nom} ${commandes[0].prix} €`);
console.log(`${commandes[1].nom} ${commandes[1].prix} €`);
console.log(`Prix total : ${prixTotal} €`);
end();


/*------------------------------------------------------
PARTIE N°2
------------------------------------------------------*/
makeTitle('PARTIE N°2');

// QUESTION 1 : Récupérer le prix de la Salade César

let prixSalade;
for (let i = 0; i < entrees.length; i++) {
    // Si le nom de l'entrée est "🥗 Salade César" alors je recupère son prix
    if (entrees[i].nom === "🥗 Salade César") {
        prixSalade = entrees[i].prix;
        start();
        console.log(`${entrees[i].nom} : ${prixSalade} €`);
        end();
    }
}

// QUESTION 2 : calculer le prix du menu (Salade César + Pâtes Carbonara + Gâteau au chocolat + Café)

// Initialisation des variables
let prixDuMenu = 0;
let menu = ''; // chaîne vide

// Trouver le prix de la Salade César
for (let i = 0; i < entrees.length; i++) {
    if (entrees[i].nom === "🥗 Salade César") {
        // menu += entrees[i].nom + '\n';
        menu = menu + entrees[i].nom + '\n';
        // entree1 = entrees[i].nom;
        prixDuMenu += entrees[i].prix;
    }
}

// Trouver le prix de la Pizza Margherita
let plat1;
for (let i = 0; i < plats.length; i++) {
    if (plats[i].nom === "🍕 Pizza Margherita") {
        menu += plats[i].nom + '\n';
        // plat1 = plats[i].nom;
        prixDuMenu += plats[i].prix;
    }
}


// console.log(`${entree1}\n - ${plat1}\n`);


// Trouver le prix du Gâteau au chocolat
for (let i = 0; i < desserts.length; i++) {
    if (desserts[i].nom === "🍰 Gâteau au chocolat") {
        menu += desserts[i].nom + '\n';
        prixDuMenu += desserts[i].prix;
    }
}

// Trouver le prix du Café
for (let i = 0; i < boissons.length; i++) {
    if (boissons[i].nom === "☕ Café") {
        menu += boissons[i].nom + '\n';
        prixDuMenu += boissons[i].prix;
    }
}

start();
console.log(`Menu : \n\n${menu} \n ${prixDuMenu} €.`);
end();

// QUESTION 3 : quels sont les plats (toutes catégories confondues) qui coûtent moins de 10€ ?

const platsMoinsDe10 = [];

// Vérifier les entrées
for (let i = 0; i < entrees.length; i++) {
    if (entrees[i].prix < 10) {
        platsMoinsDe10.push(entrees[i]);
        // console.log(`${entrees[i].nom} : ${entrees[i].prix} €\n`);
    }
}

// Vérifier les plats
for (let i = 0; i < plats.length; i++) {
    if (plats[i].prix < 10) {
        platsMoinsDe10.push(plats[i]);
    }
}

// Vérifier les desserts
for (let i = 0; i < desserts.length; i++) {
    if (desserts[i].prix < 10) {
        platsMoinsDe10.push(desserts[i]);
    }
}

// Vérifier les boissons
for (let i = 0; i < boissons.length; i++) {
    if (boissons[i].prix < 10) {
        platsMoinsDe10.push(boissons[i]);
    }
}

start();
console.log('Plats à moins de 10€ :\n');
for (let i = 0; i < platsMoinsDe10.length; i++) {
    console.log(`${platsMoinsDe10[i].nom} : ${platsMoinsDe10[i].prix} €`);
}
end();


/*------------------------------------------------------
PARTIE N°3
------------------------------------------------------*/
start();
console.log('PARTIE N°3');
end();

// QUESTION 1 : Créer une fonction `afficherMenu` qui affiche le menu d'une catégorie donnée (entrées, plats, desserts ou boissons).

function obtenirPrixPlat(categorie, nom) {

    // if (categorie !== entrees || categorie !== plats || categorie !== desserts || categorie !== boissons) {
    //     console.log('la catégorie demandée n\'existe pas!');
    // }

    for (let i = 0; i < categorie.length; i++) {
        if (categorie[i].nom === nom) {
            start();
            console.log(`${categorie[i].nom} : ${categorie[i].prix} €`);
            end();
            return categorie[i].prix;
        }
    }
    return null; // Si le plat n'est pas trouvé
}

obtenirPrixPlat(entrees, "🥗 Salade César");

// QUESTION 2 : Calcul du prix total d'une commande;

function calculerTotalCommande(commandes) {
    return commandes.reduce((total, plat) => total + plat.prix, 0);
}

start();
console.log('Calcul du prix total de la commande :\n');
commandes.push(entrees[0]);
commandes.push(plats[1]);
commandes.push(desserts[0]);
commandes.push(boissons[1]);
console.log('Commande :');
console.log(commandes);

calculerTotalCommande(commandes);
console.log(`\nPrix total : ${calculerTotalCommande(commandes)} €.`);
end();

