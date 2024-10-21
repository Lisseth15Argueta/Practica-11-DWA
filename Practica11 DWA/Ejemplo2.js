let estudiante = [
    {nombre: "Isabel",  nota:9},
    {nombre: "Melissa",  nota:8},
    {nombre: "Denis",  nota:7},
];

//Crear una copia usando spread, para modificar la nota de datos

let estudianteModificados = estudiante.map(estudiante =>
    estudiante.nombre === "Denis"
    ? {...estudiante, nota: 9}
    :{...estudiante}
);

console.log(estudianteModificados);
console.log(estudiante);


    
