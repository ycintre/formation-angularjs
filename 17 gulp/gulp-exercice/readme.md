# TP gulp
> Le but du TP est de créer un script de build avec gulp

## Instructions

- Installer gulp
  - `npm install -g gulp-cli`
  
- Récupérer les dépendances bower et npm
  - `npm install`
  - `bower install`
  
- Compléter le script gulp pour avoir un projet buildé dans un dossier `dist`
  - Créer une tache qui copie l'arborescence des fichier sauf les `.js` 
  > tips: https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpsrcglobs-options & https://github.com/isaacs/node-glob/blob/master/README.md
  - Créer une tache qui concatène les fichiers `.js` et les minifie dans `app.min.js` 
  > tips: gulp-concat & gulp-uglify
  - Créer une tache qui copie les fichiers nécessaires des dépendances bower
  > tip: gulp-bower-files
  - Créer une tache qui déclenche tout le processus de build
  > tip: run-sequence

- Quand vous ajoutez des plugins gulp, pensez à les ajouter au package.json (manuellement ou via `npm install --save-dev le-nom-de-mon-plugin`)
  
- A essayer si vous avez le temps...
  - Minifier le html
  - Concaténer et minifier les fichier des librairies (dans `bower_components`)
  