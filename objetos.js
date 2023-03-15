//ejemplos
const cat = {
    'name': 'Whiskers',
    'legs': 4,
    'tails': 1,
    'enemies': ['Water', 'Dogs']
};

const anotherObject = {
    make: 'Ford',
    5: 'five',
    'model': 'focus'
};


/*Crea un objeto que represente a un perro llamado myDog que contenga las propiedades name (una cadena), legs, tails y friends.
Puedes establecer estas propiedades del objeto a los valores que quieras, siempre y cuando name sea una cadena, legs y tails sean números, y friends sea un arreglo.*/
//Solución
const myDoggy = {
    name: 'Fito',
    legs: 4,
    tails: 1,
    friends: ['cat', 'bird', 'food'] 
};


/*Lee los valores de las propiedades de testObj utilizando la notación de puntos. 
Asigna la variable hatValue igual a la propiedad hat del objeto y asigna la variable shirtValue igual 
a la propiedad shirt del objeto.*/
const testObj = {
    'hat': 'ballcap',
    'shirt': 'jersey',
    'shoes': 'cleats'
};
//Solución
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

/*Lee los valores de las propiedades an entree y the drink de testObj usando la notación de corchetes
 y asígnalos a entreeValue y drinkValue respectivamente.*/
 const testObj = {
    'an entree': 'hamburger',
    'my side': 'veggies',
    'the drink': 'water'
 };
 //Solución
 const entreeValue = testObj['an entree'];
 const drinkValue = testObj['the drink'];

 //ACCEDER A PROPIEDADES DE OBJETOS CON VARIABLES.
 //Ejemplos
 const dogs = {
    Fido: 'Mutt',
    Hunter: 'Doberman',
    Snoopie: 'Beagle'
 };

 const myDog = 'Hunter';
 const myBreed = dogs[myDog];
 console.log(myBreed);

 /*Asigna la variable playerNumber a 16. Luego, usa la variable para buscar
  el nombre del jugador y asignarlo a player.*/
  const testObj_ = {
  12: 'Namath',
  16: 'Montana',
  19: 'Unitas'
  };
  //Solución
  const playerNumber = 16;
  const player = testObj[playerNumber];


//ACTUALIZANDO PROPIEDADES DE UN OBJETO
//Ejemplos
const ourDog = {
    'name': 'Camper',
    'legs': 4,
    'tails': 1,
    'friends': ['everything!']
};
/*Puesto que es un perro particularmente feliz, vamos a cambiar su nombre por la cadena Happy Camper. 
Así es como actualizamos la propiedad del nombre del objeto: 
ourDog.name = "Happy Camper"; o ourDog["name"] = "Happy Camper";. Ahora cuando evaluamos ourDog.name, 
en lugar de obtener Camper, vamos a obtener su nuevo nombre, Happy Camper.*/

/*Ejercicio: Actualiza la propiedad nombre del objeto myDog. 
Cambiemos su nombre de Coder a Happy Coder. 
Puedes utilizar tanto la notación de puntos como la notación de corchetes.*/
const myDog = {
    'name': 'Coder',
    'legs': 4,
    'tails': 1,
    'friends': ['freeCodeCamp Campers']
};
//Solución
myDog.name = 'Happy Coder';
