let currentInputValue = 0;
let storedInputValue = ''; 
let operator = '';
let storedOperator = '';
let decimalUsed = false;

const display = document.querySelector('#display');
const numbers = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operator'));
numbers.forEach(element => element.addEventListener('click', enterNumber));
operators.forEach(element => element.addEventListener('click',calculate));

function calculate(){
    if(!storedInputValue && this.innerHTML!='=' && this.innerHTML!='clear'){
        storedInputValue = Number(currentInputValue);
        currentInputValue = '0';
        updateDisplay(storedInputValue);
    }
    else{
        operator = this.innerHTML;
        operate(operator);
    }
    decimalUsed = false;
}

function operate(operator){
    let val = Number(currentInputValue); //transform currentInputValue from string to number
    let executedOperator;
    if(storedOperator){
        executedOperator = storedOperator;
        storedOperator = operator;
        console.log(`executing stored operator: ${executedOperator}`)
    }
    else{
        executedOperator = operator;
        storedOperator = operator;
    }

    switch(executedOperator){ //evalulates based on current operation
        case '+':
            storedInputValue += val;
            break; 
        case '-':
            storedInputValue -= val;
            break;
        case '×':
            storedInputValue *= val;
            break;
        case '÷':
            storedInputValue /= val;
            break;
        case '=':
            break;
        case 'clear':
            storedInputValue = '';
            break;
    }
    currentInputValue = '0';
    updateDisplay(storedInputValue);
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

function updateDisplay(num){ //changes display on calculator
    display.innerHTML=num;
    if(!num){ display.innerHTML = '0'} //changes empty string display to '0'
    console.log(`Stored: ${storedInputValue} Current: ${currentInputValue}`);
}

