let num1= parseInt(prompt("Digite un Primer número"));
let num2= parseInt(prompt("Digite un Segundo número"));

function compara(){
    
    if(num1>num2){
        document.write(`El número ${num1} es mayor que el ${num2}`);
    }else if(num2>num1){
        document.write(`El número ${num2} es mayor que el ${num1}`);
    }else if(num1==num2){
        document.write("Los números son iguales");
    }
}

function opera(){
    suma= num1+num2;
    resta= num1-num2;
    multiplica= num1*num2;
    div= num1/num2;
    document.write(`<br> La suma es: ${suma}, la resta es: ${resta}, la multiplicación es: ${multiplica}, la división es: ${div} `);
}

compara();
opera();