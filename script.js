let currentInputValue = 0;
let storedInputValue = ''; 
let operator = '';
let decimalUsed = false;

const display = document.querySelector('#display');
const numbers = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operator'));
numbers.forEach(element => element.addEventListener('click', enterNumber));
operators.forEach(element => element.addEventListener('click',operate));

function calculate(){
    if(!storedInputValue && this.innerHTML!='='){
        storedInputValue = Number(currentInputValue);
        currentInputValue = '0';
        updateDisplay(storedInputValue);
    }
    else if(storedInputValue){
        operator = this.innerHTML;
        operate(storedInputValue, operator, currentInputValue); //note from yesterday: implement a operator placeholder that changes whenever it's not an equal sign

    }
    decimalUsed = false;
}

function operate(num1, operator, num2){
    switch(operator){
        case '+':
            updateDisplay(num1 + num2);
            break; 
        case '-':
            updateDisplay(num1 - num2);
            break;
        case '×':
            updateDisplay(num1 * num2);
            break;
        case '÷':
            updateDisplay(num1 / num2);
            break;
        //case '=':

    }
    currentInputValue = 0;
    updateDisplay(storedInputValue);

}

function enterNumber(){ //adds to currentInputValue based on user input (accounts for decimal as well)
    if(currentInputValue == '0' && this.innerHTML != '.'){ //for first numerical value inputted
        currentInputValue = this.innerHTML;
    }
    else if(this.innerHTML !='.' || (this.innerHTML=='.' && !decimalUsed)){ //allows any numerical input or a decimal input when it has not been used
        currentInputValue += this.innerHTML; //attaches user input to currentInputValue
        if(this.innerHTML == '.') decimalUsed = true; //prevents user from using multiple decimals
    }
    updateDisplay(currentInputValue);    
}

function updateDisplay(num){ //changes display on calculator
    display.innerHTML=num;
}

