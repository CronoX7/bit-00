
function captura(){

    let name= prompt("Hola, bienvenido, digita tu nombre");
    let lastname= prompt("Hola, bienvenido, digita tu nombre");
    result= name + " " + lastname
    
    let confir= confirm("Desea continuar");
    if(confir==true){
        alert(`Bienvenido ${result}`)
        document.write("Bienvenid@ " + result);
    }else
    {
        alert(`Hasta Luego ${result}`)
    }


}

captura();
