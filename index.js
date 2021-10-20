// 1)- Tenemos un array en una variable numeros con números al azar.
// Usá la función map para crear un nuevo array incrementando cada valor del array en 10, y guardarlo en la variable numerosMasDiez
// Mostrar por consola el array original y el nuevo
// const numeros = [1, 2, 3, 4, 5];

// let numerosMasDiez;

// // codear acá la solución del ejercicio

// const numerosMasDiez = numeros.map((numeros) =>{
//     return numeros * 10
// })




// console.log(numeros); 
// [1, 2, 3, 4, 5]
// console.log(numerosMasDiez); 
// [11, 12, 13, 14, 15]

// 2)- Tenemos un array en una variable numeros con números al azar.
// Usar la función map para crear un nuevo array multiplicando cada valor del array por 2, y guardarlo en la variable dobles
// Mostrar por consola el array original y el nuevo

// const numeros = [3, 7, 13, 99]

// const dobles = numeros.map((numeros) => {
//     return numeros * 2
// }) 

// // // codear acá la solución del ejercicio


// console.log(numeros); 
// // [3, 7, 13, 99]
// console.log(dobles); 
// // [6, 14, 26, 198]


// 3)- Tenemos un array en una variable frases con frases al azar.
// Usar la función map para crear un nuevo array donde cada frase empiece y termine con signo de exclamación.
// Mostrar por consola el array original y el nuevo
// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// // codear acá la solución del ejercicio

// const frasesExclamadas = frases.map((frases) => {
//     return `¡${frases}!`
// })


// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!



// 4)- Tenemos un array en una variable libros con libros para leer sobre Javascript.
// Usar la función map para crear un nuevo array donde cada titulo de los libros esté encerrado en una etiqueta <li></li>.
// Mostrar por consola el array nuevo, encerrándolo entre <ul></ul>

// const librosDeJS = [
//   'JavaScript for Kids: A Playful Introduction to Programming',
//   'Composing Software',
//   'Eloquent JavaScript: A Modern Introduction to Programming',
//   'JavaScript: The Good Parts',
//   'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
//   'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
//   'JavaScript: The Definitive Guide',
//   'You Don’t Know JS',
//   'JavaScript Allongé: The Six Edition'
// ];


// const resultadoFinal = librosDeJS.map((librosDeJS) => {
//     return ` <li> ${librosDeJS} </li> `
// })

// const resultadoFinalConUl = `<ul>  ${resultadoFinal.join("")} </ul>`


// console.log(resultadoFinalConUl)
// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>



// 5)- Tenemos un array en una variable frases con frases al azar.
// Usar la función map para crear un nuevo array que contenga la longitud de cada frase.
// Mostrar por consola el array original y el nuevo.
const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

const longitudes = frases.map((frases, index, array) => {
return frases.length
})
 


// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(longitudes); // [ 17, 18, 16 ]


// 6)-  Tenemos un array en una variable playlist con una lista de canciones de un disco.
// Usar la función map para agregar a cada título de la canción el número de posición en la que está dentro del array.



// const playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];

//  const nuevaLista = playlist.map((canciones, index, array) => {
//    return  `${index} - ${canciones}`
//  })


// console.log(nuevaLista)


// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]


// 7)- Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// Completar el siguiente código para llegar al resultado esperado
// A un costo primero se le agrega la ganancia y después el IVA (este ultimo sobre el costo + la ganancia)

// const costos = [ 12.5, 56, 98, 45.75 ];

// const agregarIVA = (costo) => {
//   return costo * 1.21;
// }

// const sumarGanancia = (costo) => {
//   return costo * 1.5;
// }

// // codear acá la solución del ejercicio


// const preciosFinales = costos.map((numeros) => {
//   return numeros * 1.21 * 1.5
// })



// console.log(preciosFinales);
// deberia mostrar
// [ 22.6875, 101.64, 177.87, 83.03625 ]


// 8)- Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// También tenemos un array en una variable productos con los nombres de cada producto.
// Completar el siguiente código para llegar al resultado esperado
// A un costo primero se le agrega la ganancia y después el IVA
// El nombre de un producto en una posición, se corresponde con el precio que está en la misma posición. 
//Por ejemplo: el producto que está en la posición 1 tiene un costo igual al elemento en la posición 1 del array costos


const productos = [ 'celular', 'notebook', 'monitor' ];
const costos = [ 12.5, 56, 98 ];

const agregarIVA = (costo) => {
  return costo * 1.21;
}

const sumarGanancia = (costo) => {
  return costo * 1.5;
}

// codear acá la solución del ejercicio


const costoFinal = costos.map((elementos) => {
  return  
})



// const preciosFinales = productos.map((elementos) => {
//   return 
// })

console.log(costoFinal)
console.log(preciosFinales);
// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]