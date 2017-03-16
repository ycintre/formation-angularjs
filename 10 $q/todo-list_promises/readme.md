# TP Promesses
> Le but du TP est de manipuler les promesses pour simuler un appel asynchrone vers un backend

## Instructions

- Utiliser le service angular `$q` pour créer un objet `Defered`
- Utiliser l'objet `Defered` pour récupérer un objet `Promise`
- Ajouter des handler sur l'objet `Promise` :
  - Handler de de succes (`then`) : renseigner la liste des taches
  - Handler d'erreur (`catch`) : afficher un message de votre choix (`console`, `alert`, afficher un div sur la page, ...)
- Utiliser le service angular `$timeout` pour simuler une latence (un appel asynchrone par exemple) et résouvre l'objet `Deferred` en succès ou en erreur


> Tip: pour obtenir un booléen aléatoire, appeler la fonction suivante:
```
/**
 * Retourne une boolean dont la valeur est déterminée aléatoirement
 * return {bool} boolean de valeur aléatoire
 */
function randomBool() {
	return !!(Math.random() >= 0.5);
}
```