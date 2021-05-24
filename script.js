function operate(operator, a, b){

}

function updateDisplay(){
    display.innerHTML=currentInputValue;
}

function enterNumber(){
    numberInputted = +this.innerHTML;

    console.log(`inputtedNumber + 10 * decimal index: ${numberInputted / (10*decimalIndex)}`);
    
    if(!containDecimal){
        currentInputValue = currentInputValue * 10 + numberInputted;
    }
    else{
        currentInputValue = currentInputValue + (numberInputted / (10*decimalIndex));
        decimalIndex*=10;;
    }

    updateDisplay();    
}

let currentInputValue = 0;
let storedInputValue = 0; 
let operator = '';
let containDecimal = true;
let decimalIndex = 1; //enabled user to input decimal

const display = document.querySelector('#display');
const numbers = Array.from(document.querySelectorAll('.number'));
numbers.forEach(element => element.addEventListener('click', enterNumber));

