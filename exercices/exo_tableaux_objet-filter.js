const products = [
    { id: 1, brand: 'huawei', price: 650, available: true, stock: 132 },
    { id: 2, brand: 'samsung', price: 750, available: false, stock: 98 },
    { id: 3, brand: 'iphone', price: 850, available: true, stock: 12 }
];

/*-------------------------------------------------------------------------------------
Calculer le nombre total d'articles en stock
--------------------------------------------------------------------------------------*/

// Je souhaite accéder à la propriété "stock" du 1er objet contenu dans mon tableau "products"
let stockObj1 = products[0].stock; // 132

// idem pour le 2ème objet
let stockObj2 = products[1].stock; // 98

// idem pour le 3ème objet
let stockObj3 = products[2].stock; // 12

// Calcul du stock total
let stockTotal = stockObj1 + stockObj2 + stockObj3; // 242
console.log(`Stock total = ${stockTotal} articles en stock.`); // 242


/*-------------------------------------------------------------------------------------
Calculer le nombre total d'articles disponibles en stock
--------------------------------------------------------------------------------------*/

let availableProducts = products.filter(product => (product.available === true));
console.log(`Tableau des produits disponibles :`);
console.log(availableProducts);

stockObj1 = availableProducts[0].stock; // 132
stockObj2 = availableProducts[1].stock; // 12

// Calcul du stock total des produits disponinbles
stockTotal = stockObj1 + stockObj2; // 144
console.log(`Stock total = ${stockTotal} articles disponibles en stock.`); // 144

