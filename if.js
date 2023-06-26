//IF, ELSE, ELSE IF
if (true) {
    console.log("Hola");
} else {
    console.log("Soy falso");
}

if (false) {
    console.log("Hola");
} else {
    console.log("Soy falso");
}

if (false) {
    console.log("Hola");
} else if (true) {
    console.log("Soy la seguna opción");
} else {
    console.log("Soy falso");
}

if (false) {
    console.log("Hola");
} else if (false) {
    console.log("Soy la seguna opción");
} else {
    console.log("Soy falso");
}

let edad = 18;

if(edad === 18){
    console.log("Puedes votar, será tu primera votación");
} else if (edad > 18 ){
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}

//Operador ternario
//condition ? true : false;
let numero = 1;
let resultado = numero === 1 ? "Si soy un uno" : "No soy uno";
console.log(resultado);