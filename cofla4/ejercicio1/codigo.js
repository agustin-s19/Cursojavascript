class Calculadora{
suma(num1, num2 ){
    return parseInt(num1) + parseInt(num2)
}
resta(num1, num2 ){
    return parseInt(num1) - parseInt(num2)
}
multiplica(num1, num2 ){
    return parseInt(num1) * parseInt(num2)
}
dividir(num1, num2 ){ 
    return parseInt(num1) / parseInt(num2)
}
potenciar(num1, exp){
    return num1**exp;
    }
raizCuadrada(num1){
    return Math.sqrt(num1);
}
raizCubica(num1){
    return Math.cbrt(num1);
}
}


const calculadora = new Calculadora();
 
alert("¿Que operacion deseas realizar?")
let operacion = prompt("1: suma , 2: resta , 3: multiplicar , 4: dividir, 5: potenciación, 6: Raíz Cuadrada, 7: Raíz Cúbica ")

if (operacion == 1){
    let numero1 = prompt("Primer numero: ");
    let numero2 = prompt("Segundo numero numero: ");
    resultado = calculadora.suma(numero1, numero2);
    alert(`Tu resultado es:  ${resultado}` );

}
else if (operacion == 2){
    let numero1 = prompt("Primer numero: ");
    let numero2 = prompt("Segundo numero numero: ");
    resultado = calculadora.resta(numero1, numero2);
    alert(`Tu resultado es:  ${resultado}` );
}
else if (operacion == 3){
    let numero1 = prompt("Primer numero: ");
    let numero2 = prompt("Segundo numero numero: ");
    resultado = calculadora.multiplicar(numero1, numero2);
    alert(`Tu resultado es:  ${resultado}` );
}
else if (operacion == 4){
    let numero1 = prompt("Primer numero: ");
    let numero2 = prompt("Segundo numero numero: ");
    resultado = calculadora.dividir(numero1, numero2);
    alert(`Tu resultado es:  ${resultado}` );
}
else if (operacion == 5){
    let numero1 = prompt("Numero a potenciar: ");
    let numero2 = prompt("Exponente: ");
    resultado = calculadora.potenciar(numero1, numero2);
    alert(`Tu resultado es:  ${resultado}` );
    
}
else if (operacion == 6){
    let numero1 = prompt("Numero para obtener su raíz cuadrada: ");  
    resultado = calculadora.raizCuadrada(numero1);
    alert(`Tu resultado es:  ${resultado}` );
    
}
else if (operacion == 7){
    let numero1 = prompt("Numero para obtener su raiz cúbica: ");
    resultado = calculadora.raizCubica(numero1);
    alert(`Tu resultado es:  ${resultado}` );
    
}
else{
    alert("Vuelva a intentar seleccionando las opciones indicadas")
}