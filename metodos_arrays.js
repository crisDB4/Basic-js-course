let articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
];

// Métodos

/* 
filter -> filtrar algunas cosa, va a 
validar si algo es verdad o falso y lo 
va a meter en un neuvo array, no va a 
modificar el array original.
*/
let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

console.log(articulosFiltrados);

//------------------------------------------------

/*
map -> genera un nuevo array
*/
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});
console.log(nombreArticulos);

//------------------------------------------------

/*
find -> genera un array
*/

let encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});
console.log(encuentraArticulo);

//------------------------------------------------

/* 
forEach -> no genera un nuevo array
*/
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

articulos.forEach(function(articulo){
    articulo.costo += 2;
});

console.log(articulos);

//------------------------------------------------

/*
some -> devuelve un binario si por lo menos un
elemento cumple la condición
*/

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
console.log(articulosBaratos);
