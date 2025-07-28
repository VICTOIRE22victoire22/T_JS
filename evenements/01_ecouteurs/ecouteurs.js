/*--------------------------------------------------
Modifier la couleur de fond du carré
----------------------------------------------------*/

// cibler l'élément sur lequel va être déclenché l'événement
const btn2 = document.querySelectorAll('button')[1];
console.log('btn2 : ', btn2);

// cibler l'élément sur lequel va s'appliquer le résultat de l'événement
const square = document.getElementById('square');

// on définit la fonction de rappel
const changeColor = () => {
    square.style.backgroundColor = 'green';
}

// on ajoute un écouteur d'événement sur la cible

/* changeColor est appelée :
- callback (fonction de rappel)
- eventHandler (gestionnaire d'événement)
*/
btn2.addEventListener('click', changeColor);


/*--------------------------------------------------
Modifier la forme du carré
----------------------------------------------------*/
const btn3 = document.querySelectorAll('button')[2];

btn3.addEventListener('click', () => {
    square.style.borderRadius = '50%';
});

/*--------------------------------------------------
Remettre l'élément dans son état initial
----------------------------------------------------*/
const btn4 = document.querySelectorAll('button')[3];

btn4.addEventListener('click', () => {
    square.style.backgroundColor = 'red';
    square.style.borderRadius = '0';
});