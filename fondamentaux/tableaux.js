/*--------------------------------------------------
TABLEAUX
---------------------------------------------------*/

// Création d'un tableau vide
const data1 = [];

// Création d'un tableau et initialisation
const data2 = ['Alice', 23, true, { email: 'alice@rmail.com' }, [12, 'italienne']];

// Accéder aux données du tableau
console.log('prénom: ', data2[0]); // prénom :  Alice
console.log('email: ', data2[3].email);
console.log('nationalité: ', data2[4][1]);

const data3 = [12, { prenom: 'Bob', infos: { tel: 656763452 } }, 'disponible'];

const obj = data3[1];
const infos = obj.infos;
const tel = infos.tel;
console.log('tel:', tel); // 656763452

console.log('tel', data3[1].infos.tel); // 656763452

// Modifier des données d'un tableau
data2[0] = 'Alicia';
console.table(data2);

// Supprimer une donnée d'un tableau

// Supprimer le premier élément d'un tableau
data2.shift();
console.log('Tableau data2 avec 1er élément supprimé');
console.log(data2);

// Supprimer un élément positionné à un index bien précis 
let deleted = data2.splice(2, 1);
console.log('Elément retiré:', deleted);
console.log(data2); // [ 23, true, [ 12, 'italienne' ] ]

// Nombre d'élements contenus dans un tableau
let nombreElements = data2.length;
console.log(nombreElements); // 3

// Boucler sur une tableau avec la boucle for
for (let i = 0; i < data2.length; i++) {
    console.log(`data2[${i}]: ${data2[i]}`);
}

// Sortie console :
// data2[0]: 23
// data2[1]: true
// data2[2]: [ 12, 'italienne' ]


// Boucler sur une tableau avec la méthode forEach
data2.forEach((element, index) => {
    console.log('data2[', index, ']:', element);
});

// Sortie console :
// data2[ 0 ]: 23
// data2[ 1 ]: true
// data2[ 2 ]: [ 12, 'italienne' ]

