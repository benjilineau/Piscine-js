# manip-array

### Sujet

Créez une fonction `manipArray` prenant en paramètre un tableau de nombres.  
Cette fonction doit retourner un tableau contenant dans l'ordre :

- un tableau avec tous les nombres multipliés par 2
- un tableau avec tous les nombres moins 5
- un tableau avec tous les nombres supérieurs à 5

Si le tableau passé en paramètre est vide, vous devez renvoyer un tableau vide.

### Exemples

```js
manipArray([]); // []
manipArray([1, 2, 3]); // [ [ 2, 4, 6 ], [ -4, -3, -2 ], [] ]
manipArray([10, 5, 2, 13]); // [ [ 20, 10, 4, 26 ], [ 5, 0, -3, 8 ], [ 10, 13 ] ]
```
