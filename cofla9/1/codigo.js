const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const materia = document.getElementById("materia")
const boton = document.getElementById("btn-enviar")
const resultado = document.querySelector(".resultado")

boton.addEventListener("click", (e)=>{
    e.preventDefault()
    let error = validarCampos();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    }
    else{
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})

const validarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 5){
        error[0] = true;
        error[1] = "El nombre no puede contener menos de 5 caracteres"
        return error;
    }
    else if (nombre.value.length > 45){
        error[0] = true;
        error[1] = "El nombre no puede contener más de 45 caracteres"
        return error;    
    }
    else if(email.value.length < 5 ||
            email.value.length > 45 ||
            email.value.indexOf("@") == -1 ||
            email.value.indexOf(".") == -1){
                error[0] = true;
                error[1] = "El Mail es Invalido";
                return error;

            }
    else if(materia.value.length < 4 || materia.value.length > 60){
        error[0] = true;
        error[1] = "Materia Invalida"
        return error;
    }

    error[0] = false;
    return error;


}


