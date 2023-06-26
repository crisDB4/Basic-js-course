// COERCIÓN IMPLICITA
// de number a string
let a = 4 + "7"; // concatena por el signo + y el string
                // pasa el 4 a string
console.log(a); // 47
console.log(typeof(a)); // string

// de string a number
let b = 4 * "7"; // ya que se tiene un numero y el signo *
                // pasa el 7 a número
console.log(b); // 28
console.log(typeof(b)); // number

//-------------------------------------------------

// COERCIÓN EXPLÍCITA
// de number a string
let c = 20;
let d = String(c); // con String obliga al número a ser string
                // también es posible concatenando: c + ""
console.log(d); // 20 
console.log(typeof(d)); // string

// de string a number
let e = Number(d); // con Number obliga al texto a ser number
                  // también es posible: d * 1  
console.log(e); // 20 
console.log(typeof(e)); // number

//---------------------------------------------------
//Prueba
console.log("2"*"2"+"3"*"3")
// 2*2=4 -> number
// 3*3=9 -> number
// los suma porque son number
// = 13

