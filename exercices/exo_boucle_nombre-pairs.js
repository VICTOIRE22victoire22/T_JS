// Afficher tous les nombres pairs entre 57 et 103

// étape 1 : parcourir les numéros entre 57 et 103 => boucle

// étape 2 : vérifier si le nombre modulo 2 est identique à  O => structure de controle

// étape 3 : Si oui => afficher le nombre en console, sinon continuer d'avancer => condition

for (let i = 57; i < 104; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}