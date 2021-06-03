const getInfo = async ()=>{
    let aprobados = document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-desaprobados");
    try{
        resultado = await axios("informacion.txt");
            aprobados.innerHTML = resultado.data.aprobados;
            desaprobados.innerHTML = resultado.data.desaprobados;
        }
        catch(e){
            aprobados.innerHTML = "LA API FALLÓ";
            desaprobados.innerHTML = "LA API FALLÓ";
        }
}   
       


document.getElementById("getInfo").addEventListener("click",getInfo);