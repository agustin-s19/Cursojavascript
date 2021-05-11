let materias = {
    fisica: [90,6,4,"fisica"],
    matematica: [50,8,3,"matematica"],
    quimica: [70,5,2,"quimica"],
    musica: [30,3,1,"musica"],
    arte: [20,2,2,"arte"],
    edfi: [98,10,3, "edfi"],
    ingles: [100,10,4, "ingles"],

}

const aprobo=()=>{
    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1]
        let trabajos = materias[materia][2]

        console.log(materias[materia][3]);

        if(asistencias >= 90){
            
            console.log("%c   Asistencia en orden","color:green");
        } else{

            console.log("%c   Falta de asistencias", "color: red");
        }
        if (promedio >= 7){
            console.log("%c   Promedio en orden","color:green");
        } else{
            console.log("%c   Promedio desaprobado", "color: red");
        }
        if(trabajos >= 3){
            console.log("%c   Trabajos en orden","color:green");
        }else{
            console.log("%c   Faltan trabajos", "color: red");
        }
    }
}

aprobo()

