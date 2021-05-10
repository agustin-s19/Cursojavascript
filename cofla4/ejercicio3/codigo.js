
let materias ={
        fisica: ["Perez", "Pedro", "Pepito","Alberto","Juan","Maria"],
        quimica: ["Rodriguez", "Pedro","Juan", "Cofla", "Maria"],
        musica: ["Hernandez", "Roberto", "Santiago", "Santi", "Alvin","El Topo"],
        programacion: ["Dalto", "Pedro", "Pepito", "Cofla", "Maria"]
    }

const inscribir =(alumno, materia)=>{
    personas = materias[materia];
    if(personas.length >= 21) {
        document.write(`Lo siento ${alumno} la materia ${materia} se encuentra llena y no es posible anotarte.<br> <br>`);
    }
    else{
        personas.push(alumno);
    if (materia == "fisica"){
        materias = {
            fisica: personas,
            programacion: materias['programacion'],
            musica: materias['musica'],
            quimica: materias['quimica']
        }
    }
    else if (materia == "programacion"){
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                musica: materias['musica'],
                quimica: materias['quimica']
        }

    }
    else if (materia == "musica"){
        materias = {
            fisica: materias['fisica'],
            programacion: materias['programacion'],
            musica: personas,
            quimica: materias['quimica']
    }

    }
    else if (materia == "quimica"){
        materias = {
            fisica: materias['fisica'],
            programacion: materias['programacion'],
            musica: materias['musica'],
            quimica:personas,
    }
    
    }
        document.write(`<br>¡Felicidades ${alumno}! te has inscripto a ${materia} correctamente. <br><br>`);
    }
}


document.write(materias['fisica']  + "<br>");

inscribir("pedrito", "fisica");
inscribir("alberto", "fisica");
inscribir("mauricio", "fisica");
inscribir("carlitos", "fisica");
inscribir("pedrito", "fisica");
inscribir("alberto", "fisica");
inscribir("mauricio", "fisica");
inscribir("carlitos", "fisica");
inscribir("pedrito", "fisica");
inscribir("alberto", "fisica");
inscribir("mauricio", "fisica");
inscribir("carlitos", "fisica");
inscribir("pedrito", "fisica");
inscribir("alberto", "fisica");
inscribir("mauricio", "fisica");
inscribir("carlitos", "fisica");



document.write(materias['fisica']  + "<br");
