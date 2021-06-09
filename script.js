const display = document.querySelector('#display');
const numbers = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operator'));
numbers.forEach(element => element.addEventListener('click', enterNumber));
operators.forEach(element => element.addEventListener('click',calculate));

let currentInputValue = 0;
let storedInputValue = 0; 
let storedOperator = '';
let decimalUsed = false;


function calculate(){
    if(this.innerHTML=='clear'){
        reset();
        updateDisplay(currentInputValue);
    }
    else{
        operator = this.innerHTML;
        operate(storedInputValue, Number(currentInputValue), operator);
    }
    decimalUsed = false; //if an operator is used, currentInputValue gets a reset
}

function operate(prevVal, currentVal, operator){
    if(operator!='='){
        if(!storedOperator){
            switch(operator){
                case '+':
                    storedInputValue=prevVal+currentVal;
                    break;
                case '-':
                    storedInputValue=prevVal-currentVal;
                    break;
                case '×':
                    storedInputValue=prevVal*currentVal;
                    break;
                case '÷':
                    storedInputValue=prevVal/currentVal;
                    break;
            }
        }
        else if(storedOperator){
            switch(storedOperator){
                case '+':
                    storedInputValue=prevVal+currentVal;
                    break;
                case '-':
                    storedInputValue=prevVal-currentVal;
                    break;
                case '×':
                    storedInputValue=prevVal*currentVal;
                    break;
                case '÷':
                    storedInputValue=prevVal/currentVal;
                    break;
            }
        }
        storedOperator=operator;
        currentInputValue = '0';
        updateDisplay(storedInputValue);
    }
    else if(operator=='='){
        console.log(`${storedInputValue} ${currentInputValue}`)
        operate(Number(storedInputValue),Number(currentInputValue),storedOperator);
        console.log(`Equal has been hit: storedInputValue: ${storedInputValue} currentInputValue: ${currentInputValue}`);
    }
}

function enterNumber(){ //changes currentInputValue based on user input (accounts for decimal as well)
    if(currentInputValue == '0' && this.innerHTML != '.'){ //for first numerical value inputted
        currentInputValue = this.innerHTML;
    }
    else if(this.innerHTML !='.' || (this.innerHTML=='.' && !decimalUsed)){ //allows any numerical input or a decimal input when it has not been used
        currentInputValue += this.innerHTML; //attaches user input to currentInputValue
        if(this.innerHTML == '.') decimalUsed = true; //prevents user from using multiple decimals
    }
    updateDisplay(currentInputValue);    
}

function reset(){
    storedInputValue = 0;
    currentInputValue = 0; 
    storedOperator = '';
    decimalUsed = false;
}

function updateDisplay(num){ //changes display on calculator
    display.innerHTML=num;
    if(!num){ display.innerHTML = '0'} //changes empty string display to '0'
    //console.log(`Stored: ${storedInputValue} Current: ${currentInputValue}`);
}