let frutas = ["Manzana","Platano","Cereza","Fresa"]; // creción de array

console.log(frutas); // muestra los elementos

console.log(frutas.length); // cuantos elementos tiene el array

console.log(frutas[2]); // acceder a los elentos del array

// Métodos

frutas.push("Uvas"); // añadir elementos al final del array
console.log(frutas);

frutas.pop(); // elimina el ultimo elemento del array
console.log(frutas);

frutas.unshift("Pera"); // añade elementos al inicio del array
console.log(frutas);

frutas.shift(); // Elimina el primer elemento del array
console.log(frutas);

console.log(frutas.indexOf("Cereza")); // devuelve el indice del elemento
