# TP custom component
> Le but du TP est de créer un composant réutilisable

## Instructions

- Dans le fichier `heroInfoCard.component.js`
  - déclarer un composant `heroInfoCard` avec les infos nécessaires:
    - `templateUrl`
    - `controller`
    - `bindings` (hero et fonction de suppresion)

- Dans le fichier `heroInfoCard.component.html`
  - completer les expressions vides pour afficher les informations du hero
  - ajouter un handler `ng-click` qui va permettre de supprimer le hero, bien faire remonter cette actino jusqu'au backend
  
- Dans le fichier `index.html`
  - afficher la liste des heros (`ng-repeat`)
  - pour chaque hero afficher ses informations en utilisant le composant `heroInfoCard`
	
