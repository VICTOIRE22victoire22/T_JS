const menuItems = ["Accueil", "Technologies", "Tendances", "Contact"];

const technologies = [
    {
        nom: "React",
        description: "Une bibliothèque JavaScript pour construire des interfaces utilisateur.",
        popularite: "Très populaire"
    },
    {
        nom: "Vue.js",
        description: "Un framework progressif pour construire des interfaces utilisateur.",
        popularite: "Populaire"
    },
    {
        nom: "Svelte",
        description: "Un framework moderne qui compile le code en JavaScript pur.",
        popularite: "En pleine croissance"
    },
    {
        nom: "Tailwind CSS",
        description: "Un framework CSS utilitaire pour un développement rapide.",
        popularite: "Très populaire"
    }
];

const footerInfo = {
    entreprise: "WebTech Agency",
    contact: "contact@webtech.com",
    telephone: "01 23 45 67 89",
    adresse: "123 Rue des Développeurs, Paris"
};

// const target = document.querySelector('body');

// target.innerHTML += `<nav><a></a><a></a><a></a><a></a><a></a></nav>`;

// // AJOUT DU TEXTE

// const a1 = document.querySelectorAll('a')[0];
// const a2 = document.querySelectorAll('a')[1];
// const a3 = document.querySelectorAll('a')[2];
// const a4 = document.querySelectorAll('a')[3];
// const a5 = document.querySelectorAll('a')[4];

// a1.innerText += menuItems[0];
// a2.innerText += menuItems[1];
// a3.innerText += menuItems[2];
// a4.innerText += menuItems[3];
// a5.innerText += menuItems[4];




// for (let i = 0; i < menuItems.length; i++) {
//     // récupération du nom du lien
//     let linkName = menuItems[i];
//     // mettre le nom du lien dans le noeud element "a" que l'on injecte dans le noeud element "nav"
//     nav.innerHTML += `<a>${linkName}</a>`;
// }


/*------------------------------------------------------------
Fonction qui génère une barre de navigation
-------------------------------------------------------------*/
const displayNavbar = () => {
    // Création de la balise nav
    const nav = document.createElement('nav');
    menuItems.forEach(item => nav.innerHTML += `<a>${item}</a>`);// on injecte ke noeud élement "nav" dans le noeud élement "body" en tant que premier noeud enfant avec "prepend"
    document.body.prepend(nav);
}

// Encore plus concis : const navbar = () => document.body.innerHTML += `<nav>${menuItems.map(item => `<a>${item}</a>`).join('')}</nav>`;

/*------------------------------------------------------------
Fonction qui génère une grille de cards
-------------------------------------------------------------*/
// const displayCards = () => {
//     const main = document.createElement('main');
//     for (let i = 0; i < technologies.length; i++) {
//         const cardTitle = technologies[i].nom;
//         const cardDesc = technologies[i].description;
//         const cardTag = technologies[i].popularite;
//         main.innerHTML += `<article class="card"><h2 class="card__title">${cardTitle}</h2><p class="card__desc">${cardDesc}</p><span class="card__tag">${cardTag}</span></article>`;
//     }
//     document.body.appendChild(main);
// }

const displayCards = () => {
    const main = document.createElement('main');
    technologies.forEach(technologie => {
        main.innerHTML += `<section class="card"><h2 class = "card__title">${technologie.nom}</h2> 
        <p class = "card__desc">${technologie.description}</p> 
        <span class = "card__tag">${technologie.popularite}</span></section>`
    });
    document.body.appendChild(main);
}

/*------------------------------------------------------------
Fonction qui génère un pied de page
-------------------------------------------------------------*/
const displayFooter = () => {
    const footer = document.createElement('footer');
    let i = 0;
    let cle;
    for (const [key, value] of Object.entries(footerInfo)) {
        (i !== 0) ? cle = `${key}: ` : cle = '';
        footer.innerHTML += `<p class="footer__contact">${cle}${value}</p>`;
        i++;
    }
    document.body.appendChild(footer);
}

displayNavbar();
displayCards();
displayFooter();