dinero1 = prompt("Cuanto dinero tienes Cofla: ");
dinero2 = prompt("Cuanto dinero tienes Roberto: ");
dinero3 = prompt("Cuanto dinero tienes Pedro: ");

dinero1 =parseInt(dinero1);

if(dinero1 >= 0.6 && dinero1 < 1){
    alert("Cofla, Podes comprar el helado de agua");
    alert("Y te sobra " + (dinero1-0.6) );
}
else if(dinero1 >= 1 && dinero1 < 1.6){
    alert("Cofla, Podes comprar el helado de crema");
    alert("Y te sobra " + (dinero1-1) );
}
else if(dinero1 >= 1.6 && dinero1 < 1.7){
    alert("Cofla, Podes comprar el helado de chocolate"),
    alert("Y te sobra " + (dinero1-1.6 ));
}
else if(dinero1 >= 1.7 && dinero1 < 1.8){
    alert("Cofla, Podes comprar el helado de menta granizada");
    alert("Y te sobra " + (dinero1-1.7 ));
}
else if(dinero1 >= 1.8 && dinero1 < 2.9){
    alert("Cofla, Podes comprar el helado de Oreo");
    alert("Y te sobra " + (dinero1-1.8) );
}
else if(dinero1 >=  2.9){
    alert("Cofla, Podes comprar el pote de helado o el 1/4 Kg de helado");
    alert("Y te sobra " + (dinero1-2.9) );

}
 else{
    alert("Cofla, No te alcanza para ningún helado");
 }

 /* -------------------------------- */

 if(dinero2 >= 0.6 && dinero2 < 1){
    alert("Roberto, Podes comprar el helado de agua");
}
else if(dinero2 >= 1 && dinero2 < 1.6){
    alert("Roberto, Podes comprar el helado de crema");
}
else if(dinero2 >= 1.6 && dinero2 < 1.7){
    alert("Roberto, Podes comprar el helado de chocolate");
}
else if(dinero2 >= 1.7 && dinero2 < 1.8){
    alert("Podes comprar el helado de menta granizada");
}
else if(dinero2 >= 1.8 && dinero2 < 2.9){
    alert("Roberto, Podes comprar el helado de Oreo");
}
else if(dinero2 >=  2.9){
    alert("Roberto, Podes comprar el pote de helado o el 1/4 Kg de helado");

}
 else{
    alert("Roberto, No te alcanza para ningún helado");
 }
  /* -------------------------------- */

if(dinero3 >= 0.6 && dinero3 < 1){
    alert("Pedro, Podes comprar el helado de agua");
}
else if(dinero3 >= 1 && dinero3 < 1.6){
    alert("Pedro, Podes comprar el helado de crema");
}
else if(dinero3 >= 1.6 && dinero3 < 1.7){
    alert("Pedro, Podes comprar el helado de chocolate");
}
else if(dinero3 >= 1.7 && dinero3 < 1.8){
    alert("Pedro, Podes comprar el helado de menta granizada");
}
else if(dinero3 >= 1.8 && dinero3 < 2.9){
    alert("Pedro, Podes comprar el helado de Oreo");
}
else if(dinero3 >=  2.9){
    alert("Pedro, Podes comprar el pote de helado o el 1/4 Kg de helado");

}
 else{
    alert("Pedro, No te alcanza para ningún helado");
 }