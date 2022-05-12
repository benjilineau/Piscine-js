# manip-date

### Sujet

Créez une fonction `manipDate` prenant en paramètres deux dates.  
Cette fonction doit retourner un objet contenant :

- une clé `daysBetween` correspondant au nombre de jours entre les 2 dates
- une clé `isFirstLeap` qui vaudra vrai ou faux si la première année en paramètre est bissextile
- une clé `isSecondLeap` qui vaudra vrai ou faux si la deuxième année en paramètre est bissextile

Si une date n'est pas valide, votre fonction doit renvoyer la string `impossible`.

Les dates passées en paramètres peuvent être dans le futur ou dans le passé, votre code doit gérer les deux cas de figure.

### Exemples

```js
manipDate(new Date('hello'), new Date('world'));
// impossible
manipDate(new Date('2021-03-27'), new Date('2021-03-17'));
// { daysBetween: 10, isFirstLeap: false, isSecondLeap: false }
manipDate(new Date('2021-03-27'), new Date('2024-03-17'));
// { daysBetween: 1086, isFirstLeap: false, isSecondLeap: true }
manipDate(new Date('2024-10-27'), new Date('2024-03-17'));
// { daysBetween: 224, isFirstLeap: true, isSecondLeap: true }
```
