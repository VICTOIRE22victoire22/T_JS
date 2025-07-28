const marks = [14.32, 12.57, 18.20, 9, 14.99, 16, 13.47];

// ETAPE n°1 : Je souhaite diviser par 2 chacun des prix du tableau et arrondir la valeur obtenue à l'entier supérieur près

const newPrice = (number) => {
    let operation = Math.ceil((number / 2));
    return operation; // la fonction met à disposition du reste du code le contenu de la variable "operation"
}

const integers = marks.map(newPrice);

console.log(marks);
console.log(integers); // [8, 7, 10, 5, 8, 8, 7]

// ETAPE n°2 : Je souhaite filtrer le nouveau tableau "integers" et récupérer dans un tableau nommé "even" contenant l'ensemble des nouveaux prix calculés et pairs


const even = integers.filter(price => price % 2 === 0);
console.log(integers); // [8, 7, 10, 5, 8, 8, 7]
console.log(even); // [ 8, 10, 8, 8 ]


// ETAPE n°3 : calculer la somme des valeurs contenues dans le tableau "even" avec la méthode "reduce". On passera cette somme à une variable nommée "somme".

const somme = even.reduce((total, nombre) => total + nombre, 0);
console.log(somme); // 34


// prix => reduction => filtre => somme
const notes = [14.5, 20, 18.3, 7];

let total = notes.map(price => Math.ceil((price / 2))).filter(price => price % 2 === 0).reduce((total, nombre) => total + nombre, 0);
console.log(total); // 32


// Appliquer 20% de reduction sur les prix de tous les articles, puis filter tous les nouveaux prix obtenus qui sont supérieurs à 35 puis sommer leurs valeurs.
const articles = [10, 222, 58, 68];

const totalPrix = articles.map(prix => (prix - (prix * 20 / 100))).filter(prix => prix > 35).reduce((total, nombre) => total + nombre, 0).toFixed(2);
console.log(totalPrix);