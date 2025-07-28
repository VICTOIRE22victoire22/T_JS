/*----------------------------------------------------------
SELECTIONNER DES ELEMENTS DU DOM
------------------------------------------------------------*/

/*-------------------------------------------------------
méthode getElementById(()
---------------------------------------------------------*/
const section = document.getElementById('getId');
console.log('section:', section);

/*-------------------------------------------------------
méthode getElementByTagName()
retourne une HTMLCollection
---------------------------------------------------------*/
const divs = document.getElementsByTagName('div')
// divs est une HTMLCollection et peut être traitée comme un tablau.
console.log('divs:', divs);

for (let i = 0; i < divs.length; i++) {
    console.log(`Contenu de la div d'index ${i} : ${divs[i].textContent}`);
};

/*--------------------------------------------------------------
méthode getElementByClassName()
retourne une HTMLCollection => IMPOSSIBLE d'utiliser forEach
---------------------------------------------------------------*/
// loguer dans la console du navigateur le contenu de tous noeuds éléments dont la classe est "red-text"

const red = document.getElementsByClassName('red-text');
console.log('red-text:', red);

for (let i = 0; i < red.length; i++) {
    console.log(`contenu de la class d'index ${i} : ${red[i].textContent}`);
}

/*-------------------------------------------------------
méthode querySelector()
---------------------------------------------------------*/
const div1 = document.querySelector('div');
console.log('div1', div1);

/*----------------------------------------------------------
méthode querySelectorAll()
retourne une NodeList => possibilité d'utiliser foreach
-------------------------------------------------------------*/
const redAll = document.querySelectorAll('.red-text');
console.log('redAll', redAll);

redAll.forEach((elt, index) => {
    console.log(`Contenu de l'élément d'index ${index} : ${elt.textContent}`);
});

/*-----------------------------------------------------
PARCOURIR LE DOM
------------------------------------------------------*/

// ciblage de la balise ul
const ul = document.querySelector('ul');

// CHILDREN
// Affichage des enfants ELéments directs de ul
const lis = ul.children;
console.log('lis :', lis);

// Cibler le lien a contenu dans ul
const link = document.querySelector('a');

// PARENT NODE
// Afficher ul à partir de link
console.log(link.parentNode.parentNode);


// FIRST ELEMENT CHILD
// récupérer le premier enfant de ul
const li1 = ul.firstElementChild;
console.log('li1:', li1, li1.textContent);


// LAST ELEMENT CHILD
// récupérer le derneir enfant de ul
const li3 = ul.lastElementChild;
console.log('li3:', li3, li3.textContent);


// PREVIOUS ELEMENT SIBLING
// const li2 = document.querySelector('ul>:nth-child(2)');
const li2 = lis[1];
console.log('li2 :', li2);
console.log('Contenu de l`\'élément frère situé juste avant li2 :', li2.previousElementSibling.textContent);


// NEXT ELEMENT SIBLING
console.log('Contenu de l`\'élément frère situé juste après li2 :', li2.nextElementSibling.textContent);


// Transformer une HTMLCollection en une NodeList
let arrayList = [...lis];
console.log('lis', arrayList, typeof arrayList);
arrayList.forEach((elt, index) => {
    console.log(`Elément n°${index}: ${elt.textContent}`);
});


/*--------------------------------------------------------------------
MODIFIER LE DOM
----------------------------------------------------------------------*/
const p1 = document.querySelectorAll('#dom__modification .dom__article p')[0];
const p2 = document.querySelectorAll('#dom__modification .dom__article p')[1];
const p3 = document.querySelectorAll('#dom__modification .dom__article p')[2];
console.log('p1 : ', p1.textContent,);
console.log('p2 : ', p2.innerText,);
console.log('p3 : ', p3.innerHTML,);

p1.innerText += '<b>Bonjour !</b>';
p2.innerHTML += '<b>Bonjour !</b>';
p3.innerHTML += '<p><button>Cliquez-moi !</button></p>';

/*--------------------------------------------------------------------
MANIPULES LES CLASSES
----------------------------------------------------------------------*/
const classes_p1 = document.querySelectorAll('#dom__classes p')[0];
console.log('classes_p1.classList : ', classes_p1.classList);
// DOMTokenList(3) ['bleu', 'blanc', 'rouge', value: 'bleu blanc rouge']

// Ajouter du texte dans le second paragraphe
document.querySelectorAll('#dom__classes p')[1].classList.remove('rouge');
document.querySelectorAll('#dom__classes p')[1].classList.add('bleu');
document.querySelectorAll('#dom__classes p')[1].innerText = "Je suis le second paragraphe !";


// Toggle avec la classe 'rouge' sur le 3ème paragraphe
document.querySelectorAll('#dom__classes p')[2].classList.toggle('bleu');

// Contains
let isBlue = document.querySelectorAll('#dom__classes p')[3].classList.contains('bleu');
console.log('isBlue : ', isBlue); // false

// replace: remplacer la classe "rouge" par la classe "bleu" dans le dernier paragraphe.
document.querySelector('#dom__classes div').lastElementChild.classList.replace('rouge', 'bleu');


/*--------------------------------------------------------------------
MANIPULER LE CSS
----------------------------------------------------------------------*/
const css_p2 = document.querySelector('#dom__css .rouge');
css_p2.style.backgroundColor = 'lightblue';
css_p2.style.color = 'teal';
css_p2.style.textTransform = 'uppercase';
css_p2.style.padding = '3rem';

/*--------------------------------------------------------------------
SUPPRIMER UN ELEMENT
----------------------------------------------------------------------*/
const remove_div2 = document.querySelector('#dom__remove .rouge');
remove_div2.remove();


/*--------------------------------------------------------------------
CREER DES ELEMENTS DANS LE DOM
----------------------------------------------------------------------*/
// crée un nouvel élément div
const newDiv = document.createElement("div");
// on lui donne un peu de contenu
const newContent = document.createTextNode("Div n°2");
// ajouter le nœud texte au nouvel élément div créé
newDiv.appendChild(newContent);
// ajouter le nouvel élément créé et son contenu dans le DOM
const currentDiv = document.querySelector('#dom__create .rouge');
// Cibler le parent communs des deux div 
const parent = document.querySelector('#dom__create article');
// insertion de newDiv
parent.insertBefore(newDiv, currentDiv);


/*-----------------------------------------------
Injection de code HTML => création de code
-------------------------------------------------*/
const target = document.querySelector('#dom__create');

target.innerHTML += `<article>
    <div>
        <p>Je suis un nouvel article !</p>
    </div>
</article>`;


/*------------------------------------------------------------
Injection de code HTML avec la balise <template></template>
--------------------------------------------------------------*/

// https://developer.mozilla.org/fr/docs/Web/HTML/Element/template
// https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_template

let temp = document.getElementsByTagName("template")[0];
console.log('template : ', temp);

let clon = temp.content.cloneNode(true);
console.log('clon : ', clon);

target.appendChild(clon);