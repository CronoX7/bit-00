"use stric"
console.log('Works!')
const d=document
const $firstNumber=document.getElementById("firstNumber")
const $secondtNumber=document.getElementById("secondNumber")

const operands ={
    num1: null,
    num2: null
};

addEventListener('DOMContentLoaded', ()=>{
    addEventListeners();

});

function addEventListeners(){
    $basicOperationsForm.addEventListener("submint", ()=>{
        event.preventDefault();
        console.log(operands);

    })
    $firstNumber.addEventListeners('change', (event)=>{
        console.log(event.target.value);
        operands.num1=event.target.valueAsNumber;
        
    });
}