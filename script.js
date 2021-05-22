function operate(operator, a, b){

}

function updateDisplay(){
    display.innerHTML=inputValue;
}

function enterNumber(){
    numberInputted = Number(this.innerHTML);
    inputValue = inputValue * 10 + numberInputted;
    updateDisplay();    
}

let inputValue = 0;
const display = document.querySelector('#display');
const numbers = Array.from(document.querySelectorAll('.number'));
numbers.forEach(element => element.addEventListener('click', enterNumber));

