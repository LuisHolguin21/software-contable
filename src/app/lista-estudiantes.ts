import {Estudiantes} from './estudiantes';


export const ESTUDIANTES : Estudiantes[]=[
    {id:1, nombre_estudiante:"Juan Gabriel",faltas:3, parcial_1:3.8, parcial_2:4.1, parcial_3:3.9, definitiva:0,id_materia:1},
    {id:2, nombre_estudiante:"Antonio Velez",faltas:1, parcial_1:3.5, parcial_2:4.1, parcial_3:4.1, definitiva:0, id_materia: 1},
    {id:3, nombre_estudiante:"Manuel Never",faltas:1, parcial_1:3.1, parcial_2:4.3, parcial_3:4.7, definitiva:0, id_materia: 1},

    {id:4, nombre_estudiante:"Julio Garcia",faltas:2, parcial_1:3.6, parcial_2:4.1, parcial_3:3.7, definitiva:0, id_materia:2},
    {id:5, nombre_estudiante:"Pedro Perez",faltas:3, parcial_1:3.9, parcial_2:4.3, parcial_3:3.1, definitiva:0, id_materia:2},
    {id:6, nombre_estudiante:"Mria Rodrigez",faltas:1, parcial_1:3.7, parcial_2:4.0, parcial_3:3.4, definitiva:0, id_materia:2},

    {id:7, nombre_estudiante:"Natalia Gomez",faltas:2,  parcial_1:4.6, parcial_2:4.1, parcial_3:3.8, definitiva:0, id_materia:3},
    {id:8, nombre_estudiante:"Melida Montealegre",faltas:3,  parcial_1:2.6, parcial_2:4.7, parcial_3:3.1, definitiva:0, id_materia:3},
    {id:9, nombre_estudiante:"Marcela Cortes",faltas:2,  parcial_1:3.6, parcial_2:4.7, parcial_3:3.6, definitiva:0, id_materia:3},

    {id:10, nombre_estudiante:"Hector Dias",faltas:1, parcial_1:3.1, parcial_2:4.1, parcial_3:4.7, definitiva:0, id_materia: 4},
    {id:11, nombre_estudiante:"Miguel Quintero",faltas:4, parcial_1:3.1, parcial_2:4.1, parcial_3:4.7, definitiva:0, id_materia: 4},
    {id:12, nombre_estudiante:"Luis Yepes",faltas:2, parcial_1:3.3, parcial_2:4.1, parcial_3:4.7, definitiva:0, id_materia: 4}
];


// Función para calcular la nota definitiva
const calcularDefinitiva = (estudiante: Estudiantes): number => {
    const { parcial_1, parcial_2, parcial_3 } = estudiante;
    // Cálculo ponderado
    const notaDefinitiva = (parcial_1 * .35) + (parcial_2 * .35) + (parcial_3 * .30);
    return parseFloat(notaDefinitiva.toFixed(2)); // Redondea a dos decimales
};
// Asignar la nota definitiva a cada estudiante
ESTUDIANTES.forEach(estudiante => {
    estudiante.definitiva = calcularDefinitiva(estudiante);
});

console.log(ESTUDIANTES);