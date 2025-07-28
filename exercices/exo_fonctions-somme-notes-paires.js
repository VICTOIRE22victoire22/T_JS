const notes = [15, 12, 18, 9, 14, 16, 13];

// Coder une fonction qui soit capable de nous retourner la somme des notes qui correspondent à un nombre pair.

// Etape n°1 : Sommer les notes paires contenues dans le tableau notes

// Création d'un tableau vide qui va receuillir les notes paires
const notesPaires = [];

// Pour chaque note du tableau "notes"
for (const note of notes) {
    // Je vérifie si la note correspond un nombre pair (le modulo de la note est nul)
    if (note % 2 === 0) {
        notesPaires.push(note);
    }
}

console.log(notesPaires); // [ 12, 18, 14, 16 ]

// J'utilise la méthode 'reduce' pour réduire l'ensemble de mon tableau de notes à une seule et unique valeur
const somme = notesPaires.reduce((total, nombre) => total + nombre, 0);

console.log(`somme des notes : ${somme}`);


// Etape finale : mettre tout le processus précédent au sein d'une fonction nommée "sommerNotesPaires"

const sumEvenMarks = (arrayMarks) => {
    const evenMarks = [];

    for (const mark of arrayMarks) {
        // Je vérifie si la note correspond un nombre pair (le modulo de la note est nul)
        if (mark % 2 === 0) {
            evenMarks.push(mark);
        }
    }

    const sum = evenMarks.reduce((total, nombre) => total + nombre, 0);
    return sum;
}

const valeurs = [10, 20, 30, 40];
const toto = [1, 2, 3, 4];

let sommeNotes = sumEvenMarks(toto);
console.log(`Somme des notes : ${sommeNotes}`);