const sendButton = document.getElementById("snd-nota");

sendButton.addEventListener("click",()=>{
    let resultado, mensaje;
    try{
        prevRes = parseInt(document.getElementById("nota").value);
        if(isNaN(prevRes)){
            throw "Se detecto un intento de hackeo"
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprobacion(7,7,prevRes);

    }catch(e){
        resultado = "Se intento modificar un parametro en el sitio"
        mensaje = "Esto esta considerado como hacking y no etsa permitido"
    }
    abrirModal(resultado, mensaje);
})


const definirMensaje= (pr)=>{
    let resultado;
    switch(pr){
        case 1: resultado = "Usted ha desaprobado el examen con un 1";
        break;
        case 2: resultado = "Usted ha desaprobado el examen con un 2";
        break;
        case 3: resultado = "Usted ha desaprobado el examen con un 3";
        break;
        case 4: resultado = "Usted ha desaprobado el examen con un 4";
        break;
        case 5: resultado = "Usted ha desaprobado el examen con un 5";
        break;
        case 6: resultado = "Usted ha desaprobado el examen con un 6";
        break;
        case 7: resultado = "Usted ha aprobado el examen con un 7";
        break;
        case 8: resultado = "Usted ha aprobado el examen con un 8";
        break;
        case 9: resultado = "Usted ha aprobado el examen con un 9";
        break;
        case 10: resultado = "Usted ha aprobado el examen con un 10<br> Felicitaciones!!!";
        break;
    }
    return resultado;
}
const verificarAprobacion = (nota1,nota2,prevRes)=>{
    const promedio =(nota1+nota2+prevRes) / 3;
    if (promedio >=7){
        return "<span class='green'>MATERIA APROBADA</span>"
    }
    return "<span class='red'>MATERIA DESAPROBADA</span>"
}

const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal= document.querySelector(".modal-background");
    modal.style.display= "flex";
    modal.style.animation = "aparecer 1s forwards"
}