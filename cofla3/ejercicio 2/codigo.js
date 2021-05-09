class App{
    constructor(descargas, calificacion, peso){
        this.descargas = descargas;
        this.calificacion = calificacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true
            alert("Abriendo aplicacion");
        }
       

    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
        this.iniciada = false
        alert("Cerrando aplicacion")
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true
            alert("Instalando aplicacion");
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false
            alert("Desinstalando aplicacion");
        }
        
    
    }
    appInfo(){
        return `
        Informacion de la App: <br>
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.calificacion}</b><br>
        Peso: <b>${this.peso}</b><br>`
        
        
    }
}
app1 = new App("100K", "4✪", "120mb");
app2 = new App("100M", "5✪", "20mb");
app3 = new App("9K", "2✪", "900mb");

// app1.instalar();
// app1.abrir();
// app1.cerrar();
// app1.desinstalar();

document.write( `
    ${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    `
)
