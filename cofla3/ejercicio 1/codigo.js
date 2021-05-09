/*
-Crear un sistema para mostrar las particularidades de 3 celulares.
-Cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria ram
- Cada celular debe poder prender, apagar, reiniciar, tomar fotos y grabar*/

class celular{
    constructor(color, peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.rdp= rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
        
    }
    prender(){
        if (this.encendido == false){
            alert("Prendiendo dispositivo");
            this.encendido = true;
        }
        else{
            alert("El celular esta apagado");
            this.encendido = false
        }
    }
    reiniciar(){
            if (this.encendido == true){
                alert("Reiniciando dispositivo");
            }
            else{
                alert("El celular esta apagado");
            }
        }
    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.rdc}`)
    }

    grabarVideo(){
        alert(`Usted esta grabando en una resolucion de ${this.rdc}`)
    }
    mostrarInfo(){
        return `<br>
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.rdp}</b><br>
        Ram: <b>${this.ram}</b><br>
        Resolucion de Cámara: <b>${this.rdc}</b><br>
        `
    }
}


class celularAltaGama extends celular{
    constructor(color, peso,rdp,rdc,ram,rdce){
        super(color, peso,rdp,rdc,ram);
        this.rdce = rdce;

    }
    reconocimientoFacial(){
        alert("Se inicio el proceso de reconocimiento facial")

    }

    camaraSlowMotion(){
        alert("Se empezo a grabar un video en Slow Motion/ Camara Lenta")
    }

    mostrarInformacion(){
        return this.mostrarInfo() + `Resolucion Camara Extra: <b>${this.rdce}</b> `
    }
}





// celular1= new celular("rojo", "150g", "5","4K", "2GB");

// celular2= new celular("verde", "200g", "7","1080p", "1GB");

// celular3= new celular("blanco", "300g", "9","720p", "4GB");


// celular1.prender();
// celular1.reiniciar();
// celular1.tomarFoto();
// celular1.grabarVideo();


celular1 = new celularAltaGama("rojo", "150g", "5","4K", "2GB", "1080p")
celular2 = new celularAltaGama("negro", "300g", "7","4K", "5GB", "720p")



document.write(`
    ${celular1.mostrarInformacion()} <br>
    ${celular2.mostrarInformacion()} <br>
    
`);

/* Tomar las clases anteriores y replicarlas con otros 2 celulares que ademas tienen nuevas caracteristicas que los anteriores celulares no tenian

*/
