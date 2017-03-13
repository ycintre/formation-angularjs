# TP custom services
> Le but du TP est de créer des services pour organiser de manière cohérente les fonctions de l'application

## Instructions

- Isoler la déclaration de l'application le fichier `app.js`
- Isoler le controller dans un fichier `todo.controller.js`
- Créer un fichier `todo.service.js`
  - Créer un service `TodoService` de type `factory` qui centralise toute la communication avec le backend
  - Dans ce service implementer les méthodes nécessaires pour manipuler les taches
  - Injecter ce service dans le todo `TodoController` et l'utiliser
  - Une fois en place le `TodoController` ne doit plus avoir besoin de l'injection de `$resource`, cette partie doit être complètement abstraite par le service
- Créer un fichier `app.config.js`
  - Créer un service de type `constant`
  - Utiliser ce service pour stocker l'URL du endpoint REST
  - Injecter ce service dans le `TodoService` et utiliser la valeur stockée dans la constant