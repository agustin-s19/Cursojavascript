let free = false;

const validarcliente = (time) =>{
    let edad = prompt("Cual es tu edad: ");
    if (edad > 18){
        if(time >= 2 && time <= 7 && !free){
            alert(`Podes pasar gratis ya que sos la primer persona en pasar antes de las 2 AM`);
            free = true;
        }
        else{
            alert(`Son las ${time}:00 hs por lo tanto tenes que pagar para entrar`);
        }
    }
    else{
         alert("Sos menor de edad y este es un sitio exclusivo para mayores de edad");
    }





}
validarcliente(23)
validarcliente(2)
validarcliente(6)
