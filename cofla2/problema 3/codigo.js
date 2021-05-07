const suma =(num1, num2 )=>{
    return parseInt(num1) + parseInt(num2)
}
const resta =(num1, num2 )=>{
    return parseInt(num1) - parseInt(num2)
}
const multiplicar =(num1, num2 )=>{
    return parseInt(num1) * parseInt(num2)
}
const dividir=(num1, num2 )=>{
    return parseInt(num1) / parseInt(num2)
}

alert("¿Que operacion deseas realizar?")
let operacion = prompt("1 = suma , 2 = resta , 3 = multiplicar , 4 = dividir ")

if (operacion == 1){
    let numero1 = prompt("Primer numero: ");
    let numero2 = prompt("Segundo numero numero: ");
    resultado = suma(numero1, numero2);
    alert(`Tu resultado es:  ${resultado}` );

}
else if (operacion == 2){
    let numero1 = prompt("Primer numero: ");
    let numero2 = prompt("Segundo numero numero: ");
    resultado = resta(numero1, numero2);
    alert(`Tu resultado es:  ${resultado}` );
}
else if (operacion == 3){
    let numero1 = prompt("Primer numero: ");
    let numero2 = prompt("Segundo numero numero: ");
    resultado = multiplicar(numero1, numero2);
    alert(`Tu resultado es:  ${resultado}` );
}
else if (operacion == 4){
    let numero1 = prompt("Primer numero: ");
    let numero2 = prompt("Segundo numero numero: ");
    resultado = dividir(numero1, numero2);
    alert(`Tu resultado es:  ${resultado}` );
}
else{
    alert("Vuelva a intentar seleccionando las opciones indicadas")
}