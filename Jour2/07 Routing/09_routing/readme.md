# TP Routing
> Le but du TP est de mettre en place une navigation entre les pages d'une application

## Instructions

- Include la librairie angular-ui-router dans l'`index.html` (le fichier se trouve dans `bower_components/angular-ui-router/release/angular-ui-router.js`)
- Injecter la dépendence `ui.router` dans la déclaration de l'application `myapp`
- Mettre en place les routes via des liens (`ui-sref`) pour accéder aux 4 pages
```
/route1
/route1/list
/route2
/route2/list
```
- Déclarer les 4 routes dans la config `configure` :
  - Pour `/route1` et `/route2` préciser l'`url` et le `templateUrl`
  - Pour `/route1/list` et `/route2/list` préciser l'`url`, le `templateUrl`, le `controller` et le `controllerAs`
- Déclarer une route par defaut qui pointe vers `/route1` pour toutes les url non reconnues
- Créer les 2 controllers permettant d'afficher des listes sur les vues `/route1/list` et `/route2/list` 
  - Pour la vue `/route1/list` créer une liste nommée `items` dans le controller
  - Pour la vue `/route2/list` créer une liste nommée `things` dans le controller