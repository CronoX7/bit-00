/*const dato= new String('hola');
console.log(dato);
console.log(typeof dato);

const dato1= "hola";
console.log(dato1);

class Galleta{
    constructor (nombre, molde, sabor, colorante){
        this.nombre = nombre;
        this.molde= molde;
        this.sabor=sabor;
        this.colorante=colorante;
    }

    harina="de trigo";
    agua="pura";
    mantequilla="clarificada";
    azucar="blanca";
    hornear(){
        return "Hornear por 20 min a 100°";
        //console.log("Hornear por 20 min a 100°");
    }

}

const galleta1 =new Galleta("ducales", "rombo", "queso", "amarilla");
console.log(galleta1);
console.log(typeof galleta1);
console.log(galleta1.nombre)
galleta1.hornear();
console.log(galleta1.hornear());

const galleta2 =new Galleta("especial", "círculo", "macadamia", "blanca");
console.log(galleta2);
console.log(typeof galleta2);
console.log(galleta1['nombre'])
galleta2.hornear();
*/

/*const password= prompt('ingrese una contraseña');

let i= 0;

while (i<=10){
    const char= password[i];
    console.log(password[i]);

    if(i<=9){
        if(!password[i]){
            console.log(`inválido, la contraseña solo tiene ${i} caracteres`);
            break;
        
        }else if (i===9){            
                console.log(i);
                console.log(`El Password ES CORRECTO`);
                break;            
        }
        
    }else{
        console.log(`El Password supera los 10 caracteres`);
        break;
    }

    

    if(!password[i]){
        console.log(`inválido, la contraseña solo tiene ${i} caracteres`);
        break;
    }else if(i==10){
        console.log(`El Password ES CORRECTO`);
        break;
    }else if(i>10){
        console.log(`El Password supera los 10 caracteres`);
        break;
    } 
    i++;
}*/

let retornado = null;
let retornado2 = null;

let str = "javascript";
console.log(str);
console.log(str.length);
retornado = str.slice(2, 8); //retorna desde la posición inicial incluyéndola, hasta la posición final
console.log(retornado);
retornado2 = str.slice(-8); //retorna desde la posición final hacia atrás
console.log(retornado2);
retornado2 = str.slice(8); //retorna desde la posición hasta el final.
console.log(retornado2);
retornado2 = str.substring(8); //retorna desde la posición hasta el final.
console.log(retornado2);
retornado2 = str.substring(-8); //No funciona esta instrucción.
console.log(retornado2);

str = "Hola, DEVs!";
retornado2 = str.replace("DEVs", "Mundo"); //Reemplaza caracteres por otro.
console.log(retornado2);
retornado2 = str.toUpperCase(); //Convierte todo a mayúsculas
console.log(retornado2);
retornado2 = str.toLowerCase(); //Convierte todo a minúsculas
console.log(retornado2);

let str1 = "hola";
let str2 = "devs";
retornado2 = str1.concat(" ", str2); //Concatena strings
console.log(retornado2);
str = "    algo    ";
retornado = str.length;
console.log(retornado);

retornado = str.trim(); //Elimina los espacios de los string
retornado = retornado.length;
console.log(retornado);

retornado2 = str.trimStart(); //Elimina los espacios del principio
retornado2 = retornado2.length;
console.log(retornado2);

retornado3 = str.trimEnd(); //Elimina los espacios del final
retornado3 = retornado3.length;
console.log(retornado3);

str = "html css javascript";
retornado = str.split(" "); // Separa el string de acuerdo al parámetro que se le indique.
console.log(retornado);

//NUMBER
let num = 100;
retornado = num.toString(); //Convierte la variable en string
console.log(retornado);
retornado = num.toExponential(2); //Convierte la variable en tipo exponente
console.log(retornado);
num = 1.45;
retornado = num.toFixed(4); //Convierte la variable en tipo exponente
console.log(retornado);
retornado = parseInt(num); //Convierte la variable en tipo entero
num = "1.45";
retornado = parseFloat(num); //Convierte la variable en tipo flotante
console.log(retornado);
num = 1.45;
retornado = Number.isInteger(num); //Valida si la variable en tipo entero
console.log(retornado);

//BOOLEAN
let bool = true;
retornado = bool.toString();

// ARRAYS
let ellas = ["Luisa", "Tatiana", "Sara"];
let ellos = [
  "Guillermo",
  "Hector",
  "Jose",
  "Mateo",
  "Mauricio",
  "Raul",
  "Sergio",
];

retornado = ellas.concat(ellos); //Concatena arrays
console.log(retornado);
retornado = ellas.join(); //Convierte un array en un string
console.log(retornado);
retornado = ellas.join(" y "); //Convierte un array en un string con un separador
console.log(retornado);
retornado = ellos.slice(1, 4); //Extrae elementos de un arreglo desde un índice inicial incluyendo este
console.log(retornado);
retornado= ellos;//¡OJO!Al usar esta instrucción, los métodos splice, pop, shift, etc, alteran el arreglo fuente también.
console.log(retornado);
retornado.splice(2, 0, 'JULIAN'); //Agrega elementos de un arreglo desde un índice
console.log(retornado);
retornado.splice(2, 2); //Elimina elementos de un arreglo desde un índice
console.log(retornado);
retornado.shift(); //Elimina el primer elemento de un arreglo
console.log(retornado);
retornado.pop(); //Elimina el último elemento de un arreglo
console.log(retornado);
retornado= ellos;
retornado.push("Pepa", "Pig");
console.log(retornado);
console.log(ellos);
retornado.sort();//Organiza los datos alfabéticamente ascendente.
retornado.reverse();//Organiza los datos alfabéticamente descendente.
console.log(retornado);
