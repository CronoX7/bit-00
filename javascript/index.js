//Variables
/*let variable1="Pepita";
let variable2="Perez";
let resultado=variable1+variable2;
variable1="10";
variable2=5;
resultado=variable1+variable2;
variable1=10;
variable2=5;
resultado=variable1-variable2;
resultado=variable1*variable2;
resultado=variable1/variable2;
resultado=variable1%variable2;
resultado += 2;
resultado -= 2;
resultado *= 2;
resultado /= 2;
resultado = resultado == 10; //Retorna un valor Booleano true o false si se cumple la condición
resultado = resultado == "10"; //Retorna un valor Booleano true o false si se cumple la condición
resultado = resultado === "10"; //Retorna un valor Booleano true o false si se cumple la condición
resultado = resultado < 10; //Menor qué
resultado = resultado > 10; //Mayor qué
resultado = resultado <= 10; //Menor o igual
resultado = resultado >= 10; //Mayor o igual
resultado = resultado != 10; //Diferente que
resultado = resultado !== 10; //Diferente que
resultado = 10 === 10 && 5===5; //Retorna un Booleano si cumple con las dos condiciones
resultado = 10 === 10 || 5===5; //Retorna un Booleano si cumple con las dos condiciones

resultado=true
console.log(!resultado)//Operación de negación cambia el valor Booleano a su opuesto
console.log(resultado)
*/
/*
for (let i=0; i<5; i++){
    console.log("iterando con for, el valor de i es: ", i);
}

let i=0;
while(i<5){
    console.log("iterando con while, el valor de i es: ", i);
    i++;
}

i=0;
do{
    console.log("iterando con Do while, el valor de i es: ", i);
    i++;
}while(i<5);

*/

/*const arr=[];
console.log(arr);
console.log(typeof arr);
console.log(arr instanceof Array);
console.log(arr instanceof Object);

const obj ={};
console.log(obj);
console.log(typeof obj);
console.log(arr instanceof Object);
console.log(arr instanceof Array);
*/

//Destructurar
/*const arrNevera = ["queso", "lechuga", "jamón", "hielo", "leche", "...n"]
const [el1, el2, el3] = arrNevera;
console.log(el1, el2, el3)
console.log(arrNevera)*/

/*
const objNevera={
    hielo:'cubitos',
    queso:'tajado',
    leche:'entera',
    lechuga:'crespa',
    jamon:'de pavo'
}

const {queso, lechuga, jamon}= objNevera;
console.log(queso, lechuga, jamon);*/

/*//Argumentos Rest-> Recibe cualquier cantidad de parámetros en una función
function mostrarNombres(...nombres){
    console.log(nombres)    

}
mostrarNombres("Tatiana", "Luisa", "Sara");

//Operador Spread
const ellas=["Tatiana", "Luisa", "Sara", ""]
const ellos=["Guillermo", "Jose", "Raúl", "Mauricio","Mateo", "Andrés", "Sergio", "Hector" ]
const todos = [...ellas, ...ellos]
console.log(todos)*/

/*
//Sincrónico
function funcionSincronica(){
    console.log("Cosa 1");
    console.log("Cosa 2");
    console.log("Cosa 3");
}
funcionSincronica();

//Asincrónico
function ejemploFuncionAsincrono(){
    console.log("Cosa 1");
    setTimeout(()=> { //Callback
        console.log("Cosa 2");// Se demora de acuerdo al parámetro de tiempo ingresado
    }, 3000);
    console.log("Cosa 3");     
}

ejemploFuncionAsincrono();*/

//Promesa
/*function funcionPromesa(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({mensaje: 'Si cumplió la promesa'});
        }, 1000);
    });
}

async function usandoFuncionPromesa(){
    const retornado =await funcionPromesa();
    console.log(retornado);
}

usandoFuncionPromesa();*/
//API's
/*fetch('https://jsonplaceholder.typicode.com/users')//Es una función y le pasamos un argumento
      .then(response => response.json())//Si se resuelve llama a la método json y lo deserializa para pasarlo a un objeto de JS
      .then(json => console.log(json))//Si sale bien me muestra en consola
      .catch((error)=>console.log("Rechazo!Hubo un error:", error))*/

//Otra forma de llamar la API
/*async function obtenerUsuarios(){
    try{
        let respuesta =await fetch('https://jsonplaceholder.typicode.com/users');
        respuesta=await respuesta.json();
        console.log(respuesta);
    }catch(error){
        console.log("Rechazo!Hubo un error:", error);
    }
    
}

obtenerUsuarios();*/
