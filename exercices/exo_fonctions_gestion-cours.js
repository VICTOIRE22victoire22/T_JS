/*---------------------------------------------------------------------------------
Créer des fonctionnalités pour gérer des cours (hmtl, css, python, php)
----------------------------------------------------------------------------------*/

// Création d'un tableau de cours
let courses = [];

// Création des cours (nous les assimilerons à des objets)
const html1 = {
    id: 101,
    langage: 'html',
    title: 'HTML : les bases',
    description: 'Comprendre les balises sémantiques',
    level: 0
}

const html2 = {
    id: 102,
    langage: 'html',
    title: 'HTML : les les formulaires',
    description: 'Les différents champs de formulaires',
    level: 2,
}

/*
 Fonctionnnalités :
- Créer un cours
- Ajouter un cours au tableau
- Editer un cours
- Supprimer un cours
- Chercher un cours
_ Trier par niveau de difficulté / par ordre alphabétique
*/

/*-----------------------------------------------------------------
CREATION D'UN COURS : fonction createCourse()
-------------------------------------------------------------------*/
const createCourse = (id, lng, tit, desc, lev) => {

    // création du cours
    let newCourse = {
        id: id,
        langage: lng,
        title: tit,
        description: desc,
        level: lev,
    }

    // on place ce nouveau cours dans le tableau courses 
    courses.push(newCourse);
};

// On appelle/invoque/lance/teste cette fonction
createCourse(201, 'css', 'flexboxxx', 'comprendre la propriété display:flex', 2);
createCourse(301, 'js', 'tableaux', 'parcourir un tableau', 3);
createCourse(101, 'html', 'balises', 'décourvir les balises sémantiques', 0);

// On affiche le tableau courses dans la console
console.table(courses);

/*-----------------------------------------------------------------
TROUVER UN COURS PAR SON ID: fonction findCourse(id)
-------------------------------------------------------------------*/
const findCourse = id => {
    // Si l'id est trouvé ::
    // la fonction retourne un objet (le cours)
    // Sinon :
    // la fonction retourne un message
    let message = `Aucun cours ne correspond à l'id: ${id}`;
    return courses.find(course => course.id === id) || message;
}

const findCourse2 = (id, newTitle) => {
    // On parcourt le tableau "courses" pour aller chercher l'objet dont l'"id" correspond à la valeur que j'ai passée en paramètre de la fonction "findCourse"
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].id === id) {
            // remplacer la valeur de la propriété "title" de mon objet par le nom du titre que j'ai passée en paramètre de la fonction
            courses[i].title = newTitle;
        }
    }
};

const findCourse3 = (id, newTitle) => {
    // let found = courses.find(course => course.id === id);
    // found.title = newTitle;
    courses.find(course => course.id === id).title = newTitle;
}

// On déclenche la fonction findCourse
// findCourse2(201, 'flexbox');
// findCourse3(201, 'flexboXXXXXXXXX');

// On affiche le tableau courses dans la console
console.table(courses);

/*------------------------------------------------------------------------
EDITER UN COURS: fonction editCourse(id, prop, newValue)
- Trouver un cours par son id
- Chercher la propriété à modifier (prop)
- Affecter la nouvelle valeur (newValue) à la propriété spécifiée (prop)
-------------------------------------------------------------------------*/
const editCourse = (id, prop, newValue) => {
    // on stocke dans une variable "foundCourse" le retour de la fonction findCourse
    let foundCourse = findCourse(id);

    // Si l'id existe (si le type de foundCourse est object)
    if (typeof foundCourse === 'object') {
        let isPropExists = false;

        // Boucle for...in
        for (const key in foundCourse) {
            if (key === prop) {
                // Mofifier la propriété recherchée (prop) par la nouvelle valeur (newValue)
                foundCourse[prop] = newValue;
                isPropExists = true;
                break; // on sort de la boucle car la propriété a été trouvée et modifiée
            }
        }
        console.log(isPropExists);

        if (!isPropExists) {
            console.log(`Désolé, la propriété ${prop} n\'existe pas!`);
        }
    } else {
        console.log(foundCourse);
    }
};

editCourse(201, 'title', 'flexbox');
editCourse(201, 'levell', 10);

console.table(courses);

/*-----------------------------------------------------------------
SUPPRIMER UN COURS: fonction deleteCourse(id)
-------------------------------------------------------------------*/

/* Récupérer l'ensemble des cours dont les "id" sont différents 
de l'id passé à la fonction deleteCours */

const deleteCours = (id) => {
    courses = courses.filter(cours => cours.id !== id);
}

// suppresion du cours flexbox (id=201)
deleteCours(201);
console.table(courses);

/*-----------------------------------------------------------------
TRIER LES COURS PAR NIVEAU: fonction sortCoursesByLevel()
-------------------------------------------------------------------*/
const sortCoursesByLevel = (lvl) => {
    if (lvl === 0) {
        let tri = courses.sort((a, b) => a.level - b.level);
        console.table(tri);
        return tri;
    } else if (lvl === 1) {
        let tri = courses.sort((b, a) => a.level - b.level);
        console.table(tri);
        return tri;
    } else if (lvl === 2) {
        let tri = courses.sort((a, b) => a.title.localeCompare(b.title));
        console.table(tri);
        return tri;
    }
}

sortCoursesByLevel(0); // organise le tableau de cours par ordre croissant de niveaux
sortCoursesByLevel(1); // organise le tableau de cours par ordre décroissant de niveaux
sortCoursesByLevel(2); // organise le tableau de cours par ordre alphabétique des titres