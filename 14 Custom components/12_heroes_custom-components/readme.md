# TP custom component
> Le but du TP est de créer un composant réutilisable

## Instructions

- Importer le module `angular-resource` :
  - Embarquer `bower_components/angular-resource/angular-resource.js` dans l'`index.html`
  - Injecter le module `ngResource` dans l'application
  
- Dans le `HeroesController`
  - créer une variable qui va stocker une liste de heros
  - créer une resource vers le backend `http://localhost:3000/heroes`
  - créer une fonction qui charge la list des heros depuis le backend
  - créer une fonction qui permet de supprimer un héro
  
- Dans le fichier `heroInfoCard.component.js`
  - déclarer un composant `heroInfoCard` avec les infos nécessaires:
    - `templateUrl`
    - `controller`
    - `binding` (hero et fonction de suppresion)

- Dans le fichier `heroInfoCard.component.html`
  - completer les expressions vides pour afficher les informations du hero
  - ajouter un handler `ng-click` qui va permettre de supprimer le hero, bien faire remonter cette actino jusqu'au backend
  
- Dans le fichier `index.html`
  - afficher la liste des heros (`ng-repeat`)
  - pour chaque hero afficher ses informations en utilisant le composant `heroInfoCard`
	
