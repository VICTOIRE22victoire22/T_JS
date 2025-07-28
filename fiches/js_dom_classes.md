# Fiche de cours : Manipulation des classes avec le DOM en JavaScript

> Le **DOM (Document Object Model)** est une interface qui représente la structure d'un document HTML ou XML sous forme d'arbre. En JavaScript, le DOM permet d'accéder et de manipuler dynamiquement les éléments d'une page web. 
>
> L'une des manipulations les plus courantes est la gestion des **classes CSS** pour modifier l'apparence et le comportement des éléments.
>
> 
>
> Les classes permettent de définir facilement des styles ou de contrôler l'affichage d'éléments avec des frameworks et bibliothèques (comme Tailwind ou Bootstrap). 
>
> Grâce aux méthodes et propriétés de JavaScript, vous pouvez ajouter, supprimer ou vérifier la présence de classes sur des éléments HTML.
>
> Dans cette fiche, nous allons découvrir les principales fonctionnalités pour manipuler les classes via `classList`, accompagné d'exemples pratiques.

------

## Manipulation des classes : la propriété `classList`

Les éléments du DOM possèdent une propriété `classList`. Cette propriété retourne un objet qui représente la liste des classes CSS appliquées à l'élément. Elle propose plusieurs méthodes pour faciliter la gestion des classes.

### Ajouter une ou des classes : `add()`

La méthode `add()` permet d’ajouter une ou plusieurs classes à un élément. Si une classe existe déjà, elle n’est ni ajoutée ni dupliquée.

#### Syntaxe

```
element.classList.add(classe1, classe2, ...)
```

#### Exemple

Voici un exemple qui ajoute des classes à un élément `div` :

```javascript
const myDiv = document.querySelector("#myDiv");
myDiv.classList.add("active", "highlight");

console.log(myDiv.className); // affiche : "active highlight"
```

###  Supprimer une ou des classes : `remove()`

La méthode `remove()` permet de supprimer une ou plusieurs classes d’un élément. Si une classe n'existe pas, elle est simplement ignorée.

#### Syntaxe

```
element.classList.remove(classe1, classe2, ...)
```

#### Exemple

Supposons un élément avec des classes existantes :

```javascript
const myDiv = document.querySelector("#myDiv");
myDiv.classList.remove("active");

console.log(myDiv.className); // affiche : "highlight"
```

###  Basculer une classe : `toggle()`

La méthode `toggle()` ajoute une classe si elle n’est pas présente ou la supprime si elle est déjà appliquée. Elle permet un contrôle dynamique des styles.

#### Syntaxe

```
element.classList.toggle(classe[, force])
```

* `force` (facultatif) : Si `true`, la classe sera ajoutée. Si `false`, elle sera supprimée.

#### Exemple

```javascript
const myDiv = document.querySelector("#myDiv");
myDiv.classList.toggle("hidden");

console.log(myDiv.className); // Si "hidden" n'existait pas, elle est ajoutée
```

Avec le paramètre `force` :

```javascript
myDiv.classList.toggle("hidden", false); // Force la suppression de "hidden"
```

### Vérifier la présence d’une classe : `contains()`

La méthode `contains()` permet de vérifier si un élément possède une classe donnée.

#### Syntaxe

```
element.classList.contains(classe)
```

#### Exemple

```javascript
const myDiv = document.querySelector("#myDiv");

if (myDiv.classList.contains("active")) {
  console.log("L'élément a la classe 'active'");
} else {
  console.log("L'élément n'a pas la classe 'active'");
}
```

### Remplacer une classe : `replace()`

La méthode `replace()` supprime une classe et la remplace par une autre.

#### Syntaxe

```
element.classList.replace(classeExistante, nouvelleClasse)
```

#### Exemple

```javascript
const myDiv = document.querySelector("#myDiv");

myDiv.classList.replace("active", "inactive");

console.log(myDiv.className); // remplace "active" par "inactive"
```

### Récupérer toutes les classes : Conversion en tableau

La propriété `classList` est une **collection DOMTokenList**, mais vous pouvez facilement la convertir en tableau avec l'opérateur `Array.from()`.

#### Exemple

```javascript
const myDiv = document.querySelector("#myDiv");
const classes = Array.from(myDiv.classList);

console.log(classes); // Affiche un tableau de toutes les classes présentes
```

### Valeur initiale : `className`

La propriété `className` vous permet de récupérer ou définir directement la chaîne de caractères des classes.

#### Exemple

* Obtenir les classes :

```javascript
const myDiv = document.querySelector("#myDiv");

console.log(myDiv.className); // Affiche "highlight hidden"
```

* Modifier les classes :

```javascript
myDiv.className = "newClass";
console.log(myDiv.className); // Réinitialisé à "newClass"
```

Note : `className` est moins flexible que `classList` pour manipuler les classes individuellement.

## Résumé des méthodes

| Méthode/Propriété | Description                                        |
| ----------------- | -------------------------------------------------- |
| `add()`           | Ajoute une ou plusieurs classes                    |
| `remove()`        | Supprime une ou plusieurs classes                  |
| `toggle()`        | Ajoute ou enlève une classe                        |
| `contains()`      | Vérifie si une classe est présente                 |
| `replace()`       | Remplace une classe par une autre                  |
| `className`       | Récupère ou définit directement toutes les classes |

######  Conclusion

La manipulation des classes avec le DOM en JavaScript est un outil essentiel pour développer des interfaces utilisateur dynamiques. Avec la propriété `classList`, vous disposez de méthodes simples et efficaces pour ajouter, supprimer, basculer ou modifier des classes selon les besoins de votre application.