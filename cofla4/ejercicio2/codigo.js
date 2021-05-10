const obtenerInformacion = (materia) =>{
    materias ={
        fisica: ["Perez", "Pedro", "Pepito","Alberto","Juan","Maria"],
        quimica: ["Rodriguez", "Pedro","Juan", "Cofla", "Maria"],
        musica: ["Hernandez", "Roberto", "Santiago", "Santi", "Alvin","El Topo"],
        programacion: ["Dalto", "Pedro", "Pepito", "Cofla", "Maria"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    }
    else{
        return materias;
    }
}
const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if(informacion !== false){
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write([`El profesor de <b>${informacion[1]}</b> es: <b>${profesor}</b><br>
    Los alumnos de esta materia son: <b>${alumnos}</b><br><br>`]);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion){
        if(informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `El alumno <b>${alumno}</b> esta en <b>${cantidadTotal}</b> de clases <br>
    Esta cursando las clases: <b>${clasesPresentes}</b> <br><br>`;
    
}

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("musica");
mostrarInformacion("programacion");

document.write(cantidadDeClases("Cofla"))
document.write(cantidadDeClases("Roberto"))
document.write(cantidadDeClases("Maria"))
