/*---------------------------------------------------
LES OBJETS
----------------------------------------------------*/

// CREATION d'un Objet litéral (Litteral Object)
const customer = {
    fisrtname: 'Charlie',
    age: 32,
    isEuropean: false,
    address: {
        country: 'USA',
        city: 'Ewa Beach',
        zipcode: 96706,
        street: '271 Indiana Avenue'
    }
}

// LECTURE d'un Objet 
console.log('Prénom du client : ', customer.fisrtname); // Charlie
console.log('Age du client : ', customer.age); // 32
console.log('Européen ? : ', customer.isEuropean); // false 
console.log('Pays : ', customer.address.country); // USA 
console.log('Zipcode : ', customer.address.zipcode); // 96706

// MODIFIER un objet

// Création de la propriété "email"
customer.email = 'charlie@email.com';

// Mettre sous forme d'un tableau en console l'objet "customer"
console.table(customer);

// SUPPRIMER une propriété d'un objet : suppression de l'email
delete customer.email;
console.table(customer);

