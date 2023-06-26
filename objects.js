/*
Un objeto es una representación de la realidad, 
en el cual sus características propias se definen 
como atributos y sus acciones se definen como métodos.
*/
let miAuto = {
    // Atributos -> propiedades
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};

//--------------------------------------------------------------

// para acceder a las propiedades del objeto
console.log(miAuto.marca); // con punto
console.log(miAuto["annio"]); // con corchetes

//------------------------------------------------------------

// Método -> funciones dentro de un objeto
let miOtroAuto = {
    //propiedades
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    //Método
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`); // 'this.' es una variable que hace referencia al objeto
    }
};

miOtroAuto.detalleDelAuto(); // con punto
miOtroAuto["detalleDelAuto"](); // con corchetes

//------------------------------------------------------------

// Añadir propiedades de un objeto
miOtroAuto["color"] = "rojo";
// o
miOtroAuto.color = "rojo";

console.log(miOtroAuto);

//------------------------------------------------------------

// modificar propiedades de un objeto
miOtroAuto["marca"] = "Ford";
// o
miOtroAuto.marca = "Ford"

console.log(miOtroAuto);

//------------------------------------------------------------

// Eliminar propiedades de un objeto
delete miOtroAuto.marca
// o
// delete miOtroAuto["marca"]

console.log(miOtroAuto);

//------------------------------------------------------------

/*
    En Js, el objeto this hace referencia al diferentes 
    valores según su contexto de ejecución.
    En objetos, el contexto this hace referencia al propio objeto,
    esto sirve para acceder a los atributos y métodos própios del
    objeto.
    this.atributo => objeto.atributo
    Se debe utilizar para que funcione o da error de referencia
*/