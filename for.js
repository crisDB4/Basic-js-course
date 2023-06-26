let estudiantes = ["Pedro","Juanita","Lucia","Rosa"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(let i = 0;i<estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// recorre cada elemento del array
// la variable pasa a ser el index hasta el tamaño del arreglo
for(let estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

// ejemplo
let numbers = [5,4,3,2,1];
let duplicates = [];

for(let number of numbers) {
    duplicates.push(number*2);
}
console.log(duplicates);