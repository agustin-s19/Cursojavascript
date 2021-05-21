const materiasHTML = document.querySelector(".materias");

const materias =[
    {
        nombre: "Estadistica 4",
        nota: 8
    },
    {
        nombre: "Algebra 5",
        nota: 6
    },
    {
        nombre: "Programacion 9",
        nota: 7
    },
    {
        nombre: "Gestión de Proyectos 5",
        nota: 10
    },
    {
        nombre: "Bases de Datos",
        nota: 9
    }

];

const obtenerMateria = (id)=>{
    return new Promise((res,rej)=>{
        materia = materias[id];
        if(materia == undefined) rej("La materia no existe");
        else setTimeout(()=>{res(materia)},Math.random()*1000);
    })
}

const devolverMaterias = async ()=> {
    let materia =[];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
                <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
        

    }
}
devolverMaterias();