let alto = window.screen.height;
let ancho = window.screen.width;

comprar= confirm(`El alto de la pantalla es de  ${alto} y el ancho de la pantalla es ${ancho}.
¿Desea comprar?`)

if(comprar){
    alert("Su compra se realizo con exito.")
}
else{
    alert("Compra cancelada.")
}