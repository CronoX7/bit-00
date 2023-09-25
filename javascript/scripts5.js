let num= parseInt(prompt("Digite un número"));

function positivo(){
    
    if(num>0){
        document.write("Su número es Positivo");
    }else if(num<0){
        document.write("Su número es Negativo");
    }else if(num==0){
        document.write("Su número es Cero");
    }
}

function par(){
    let result=num%2;
    console.log(result);
    if (result==0)
    {
        document.write("\n" + "Su número es Par");
    }else{
        document.write("\n" + "Su número es Impar");
    }
}

positivo();
par();