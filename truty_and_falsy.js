Boolean(0); // false
Boolean(null); // false
Boolean(NaN); // false -> Not-a-number
Boolean(undefined); // false
Boolean(false); // false
Boolean(""); // false

Boolean(" "); // true -> el espacio cuenta como caracter
Boolean("a"); // true -> cualquier letra o palabra
Boolean(1); // true -> cualquier número diferente a 0
Boolean([]); // true -> array vacio o lleno
Boolean({}); // true -> objeto vacio o lleno
Boolean(function(){}); // true -> cualquier funcion es verdadera
Boolean(true); // true
