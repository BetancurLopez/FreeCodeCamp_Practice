//USA OBJETOS PARA HACER BUSQUEDAS (LOOKUPS)
//EJEMPLO DE ARTICULO
const article = {
    'title': 'How to create objects in JavaScript',
    'link': 'https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/',
    'author': 'Kaashan Hussain',
    'lenguage': 'JavaScript',
    'tags': 'TECHNOLOGY',
    'createdAt': 'NOVEMBER 28, 2018'
};

const articleAuthor= article['author'];
//const articleLink['link'];

const value = 'title';
const valueLookup = article[value];

/*Convierte la declaración switch en un objeto llamado lookup.
 Úsalo para buscar val y asignar la cadena asociada a la variable result.*/
 function phoneticLookup(val) {
   let result = '';
   
   //Solución:
   const lookup = {
    'alpha': 'Adams',
    'bravo': 'Boston',
    'charlie': 'Chicago',
    'delta': 'Denver',
    'echo': 'Easy',
    'foxtrot': 'Frank'
 };
//const valueLookup = result[]
result = lookup[val];
//Cambia solo el codigo de esta linea
return result;
 }

 //VERIFICA LAS PROPIEDADES DE UN OBJETO
 //Ejemplo
 const myObj = {
    top: "hat",
    bottom: "pants"
  };
  
  myObj.hasOwnProperty("top");
  myObj.hasOwnProperty("middle");
  
  //Ejercicio
  /*Modifica la función checkObj para verificar si el objeto obj pasado a la función contiene la
  propiedad checkProp. Si la propiedad es encontrada, devuelve el valor de la propiedad. 
  Si no, devuelve "Not Found".*/
  function checkObj(obj, checkProp) {
    // Cambia solo el código debajo de esta línea
    //SOLUCIÓN:
    /*if (obj.hasOwnProperty('checkProp')) {
      return obj[checkProp];
    } else {
      return 'No Found';
    }*/
    return obj[checkProp] !== undefined ? obj[checkProp] : 'Not Found';
    
    //checkObj.hasOwnProperty("");
    //return "Change Me!";
    // Cambia solo el código encima de esta línea
  }
  
//MANIPULANDO OBJETOS COMPLEJOS