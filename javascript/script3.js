/*
function captura(){

    let name= prompt("Hola, bienvenido, digita tu nombre");
    let edad= prompt("Digita tu edad");
    
        
    
    if(parseInt(edad)>=18){
        alert(`Bienvenid@ ${name}, usted es mayor de edad`)
        
    }else
    {
        alert(`Retírese ${name}, usted NO es mayor de edad`)
    }


}

captura();
*/

function roles(){
    let rol= prompt("Hola, bienvenido, digite su rol: ");
    console.log(rol)

    switch (rol)
    {
        case "admin":
            Alert("Acceso administrador aprobado")    
            document.write("Bienvenido Administrador " );
        break;

        case "ventas":
            Alert(`Acceso vendedor aprobado`)    
            document.write("Módulo de ventas" );
        break;

        case "cliente":
            Alert(`No tiene acceso a esta sección`)
            document.write("Acceso no permitodo" );
        break;
        
        default:
            Alert(`No tiene acceso denegado`)
            document.write("Usuario Inválido, acceso denegado" );
        break;
    }
        
}

roles();