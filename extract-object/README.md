# extract-object

### Sujet

Créez une fonction `extractObject` qui prend en paramètre une `string`.  
Le but de cet exercice est de retrouver tous les objets JSON **présents** dans la chaîne de caractères et de retourner un tableau contenant chaque objet avec leurs clés/valeurs inversés.

**Format des objets (JSON) :** `{"key":"value"}` ou `{"key":10}`

Pour cet exercice, il n'y a **pas** d'**objets imbriqués** ou de **tableaux**. Uniquement des **objets simples**.

Exemple :

```json
{"prenom":"John","nom":"Doe","age":30}
```

### Exemples

```js
extractObject(
  `Hello there {"hello":2,"a":3} comment ça va ? {"a":1,"z":2} {"hello":"World","abc":"def"}`
);

// output
[
  { 2: 'hello', 3: 'a' },
  { 1: 'a', 2: 'z' },
  { World: 'hello', def: 'abc' },
];
```

```js
extractObject(
  `Lorem ipsum dolor sit amet,{"hello":"world","num":10} consectetur adipiscing elit. Integer lorem ante,{"annee":2021,"ecole":"ynov"} lacinia ut dignissim non, accumsan a elit. Donec rhoncus {"ba":3,"ca":8,"fr":10} libero dui, in porttitor{"bonjour":29}mi rhoncus cursus. Donec elementum, elit{"a":"b"}ut gravida dapibus`
);

// ouput
[
  { 10: 'num', world: 'hello' },
  { 2021: 'annee', ynov: 'ecole' },
  { 3: 'ba', 8: 'ca', 10: 'fr' },
  { 29: 'bonjour' },
  { b: 'a' },
];
```

### Notions

- [JSON.Parse()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
