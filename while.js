var estudiantes = ["María", "Sergio","Rosa","Daniel"];

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0) {
    let estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}