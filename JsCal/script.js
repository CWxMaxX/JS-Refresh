class Calculator{
    constructor(firstNumber, secondNumber, operation){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operation = operation;
    }
}
const DOCD = document;
const FIRST_NUMBER = document.querySelector('.fnum');
const SECOND_NUMBER = document.querySelector('.snum');
const OPERATOR = document.querySelector('.op');
const CLA = document.querySelector('.clear-all');
const DEL = document.querySelector('.delete');
const NUMBER_INPUT = document.querySelectorAll('.numVal');
const EQUAL = document.querySelector('.eq');

FIRST_NUMBER.style.visibility= "hidden";
OPERATOR.style.visibility ="hidden";


FIRST_NUMBER.textContent =""; 
SECOND_NUMBER.textContent = "";
OPERATOR.textContent = "";
var newOr =true;


DOCD.addEventListener("keyup", (e)=>{
    console.log(e)
    
    if(!isNaN(e.key) || e.key ==="+" || e.key === "-" || e.key === "*" ||e.key ==="/"){
        newOr =false;
        if(!newOr){
            SECOND_NUMBER.append(e.key);
            newOr =false;
        }else{
            SECOND_NUMBER.textContent = e.key;
            newOr =false;
        }
    }

    if(e.key ==="=" || e.key === "Enter"){
        SECOND_NUMBER.textContent = eval(SECOND_NUMBER.textContent);
        newOr =true;

    }

    if(e.key === "Backspace"){
        SECOND_NUMBER.textContent = SECOND_NUMBER.textContent.substring(0,SECOND_NUMBER.textContent.length -1);
    }

    if(e.key === "Delete"){
        FIRST_NUMBER.textContent =""; 
        SECOND_NUMBER.textContent = "";
        OPERATOR.textContent = "";
    }
})

CLA.addEventListener('click', ()=>{
    FIRST_NUMBER.textContent =""; 
    SECOND_NUMBER.textContent = "";
    OPERATOR.textContent = "";
})

DEL.addEventListener("click", ()=>{
    SECOND_NUMBER.textContent = SECOND_NUMBER.textContent.substring(0,SECOND_NUMBER.textContent.length -1);
})

NUMBER_INPUT.forEach(function(eleA){
    eleA.addEventListener("click",()=>{
        newOr =false;
        if(!newOr){
            SECOND_NUMBER.append(eleA.value);
            newOr =false;
        }else{
            SECOND_NUMBER.textContent = eleA.value;
            newOr =false;
        }
        })
})

EQUAL.addEventListener('click', ()=>{
    SECOND_NUMBER.textContent = eval(SECOND_NUMBER.textContent);
    newOr =true;
})

