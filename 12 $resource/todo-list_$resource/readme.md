# TP $resource
> Le but du TP est d'utiliser le service `$resource` pour faire interagire l'application avec le backend

## Instructions

- Importer le module `angular-resource` :
  - Embarquer `bower_components/angular-resource/angular-resource.js` dans l'`index.html`
  - Injecter le module `ngResource` dans l'application
  
- Déclarer une resource `Todo` dans le controller
- Créer une fonction qui charge la liste ds taches en utilisant la resource `Todo`
- Modifier la fonction d'ajout de tache pour poster la nouvelle tache au backend
- Modifier la fonction de suppression de tache pour supprimer la tache du backend
- Modifier la fonction de modification d'une tache pour reporter la modification dans le backend