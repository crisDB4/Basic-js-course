/* Con la función constructora se genera un template de un objeto
en donde se crean los parámetro y sus propiedades y
después permite hacer nuevas instancias con un operador especial
*/

// se crea las propiedades con los parametros
function auto(marca, modelo, annio) {
    // el this hace referencia a la función constructora
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.detalle = function () {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}


// el new crea un nuevo objeto con la función constructora
let autoNuevo = new auto("Tesla", "Model 3", 2020);
let autoNuevo2 = new auto("Tesla", "Model X", 2018);
let autoNuevo3 = new auto("Toyota", "Corolla", 2020);

console.log(autoNuevo);
console.log(autoNuevo2);
autoNuevo3.detalle();