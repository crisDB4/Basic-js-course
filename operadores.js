// Operación ( matemáticas)
/*
Tambien llamados operadores binarios
porque es un operador generando algo entre 2 variables
*/
3 + 2; // suma
50 - 10; // resta
10 * 20; // multiplicación
20 / 2; // división

//----------------------------

// Operador de residuo
21 % 5; // devuelve el residuo de la división. 1

//----------------------------

// Operador de concatenación
"Daniel " + "Barrera"; // concatena con el +

//----------------------------

// Operador de negación
!false; // ! es negación (not) !false = true
        // es un operador unitario ya que es el operador y un valor

//----------------------------

// Operadores de asignación
let a = 1; // asigna el valor a la variable

//----------------------------

// Operadores de comparación
// devuelven valor lógico
// operadores de iguldad
3 == "3"; // compara los dos valores. No compara el tipo del valor, unicamente el valor
3 === "3"; // compara el tipo y valor
// recomendable siempre utilizar comparadores por valor y tipo

// Operadores de desigualdad
// Desigualdad
"3" != 3; // false
3 != 3 // false

// Desigualdad estrica
"3" !== 3; // true
3 !== 3; // false

// Operadores de mayor o menor
5 < 3; // menor que
5 > 3; // mayor que
5 <= 6; // menor o igual que
5 >= 6; // mayor o igual que

//----------------------------

// Operadores lógicos
a && b ; // Si a es verdad y b es verdad, se cumple la condición
a || b; // si a o b es verdadero, se cumple la condición

//----------------------------

// Operadores de incremento y decremento
variable++; // valor previo y luego lo aumenta en 1
variable--; // valor previo y luego lo disminuye en 1
++variable; // aumenta en 1 y devuelve el valor actual
--variable; // disminuye en 1 y devuelve el valor actual

let n = 3;
let b = 3;

console.log(n++); // 3
console.log(++b); // 4
console.log(n); // 4
console.log(b); // 4

//----------------------------

// operadores de asignación combinada
var contador = 1;
contador = contador + 1;
contador = contador + 2;
console.log(contador) // 4

contador += 3; 
console.log(contador); //7

a += b;
a -= b;
a *= b;
a /= b;