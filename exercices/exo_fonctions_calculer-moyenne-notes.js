// Coder une fonction "average" qui retourne la moyenne des notes contenues dans un tableau

const notes = [15, 12, 18, 9, 14, 16, 13, 2];


// Méthode sans boucle
const averageMarks = (arrayMarks) => {
    const sum = arrayMarks.reduce((total, nombre) => total + nombre, 0);
    const average = sum / arrayMarks.length;
    console.log(`Moyenne des notes (avec reduce) : ${average.toFixed(2)}`);
    return average;
}

averageMarks(notes);


// Méthode avec boucle
const averageMarkWithLoop = (arrayMarks) => {
    let sum = 0;

    for (let i = 0; i < arrayMarks.length; i++) {
        sum += arrayMarks[i]; // sum = sum + arrayMarks[i]
    }

    const average = sum / arrayMarks.length;
    console.log(`Moyenne des notes (avec boucle) : ${average.toFixed(2)}`);
    return average;
}

averageMarkWithLoop(notes);