function doble(){
    let num= prompt("Digite un número: ");
    let double= num*2;
    let middle= num/2;

    document.write(`El doble del número es: ${double}`);
    document.write(`\n La mitad de su número es: ${middle}`);
    
}

doble();