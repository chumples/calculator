class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    };

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    };

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    };

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    };

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ' '
    };

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand) 
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '&times':
                computation = prev * current
                break
            case '÷':
                if ( current !== 0) {
                computation = prev / current
                } else {
                    alert('YOU CANNOT DIVIDE BY ZERO')
                    calculator.clear()
                    calculator.updateDisplay()
                }  
                break 
            default:
                return                  
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = '' 
    };

    getDisplayNumber (number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    };
    

    updateDisplay() {
        this.currentOperandTextElement.innerText = 
        this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
        this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else { 
            this.previousOperandTextElement.innerText = ''
        }
    }
};

window.addEventListener('keydown', keyPress);

function keyPress(e) {
    if (e.key >= 0 && e.key <=9) { 
        calculator.appendNumber(e.key)
        calculator.updateDisplay();
    }
    // if (e.key === '.');
    // if (e.key === '=' || e.key === 'enter') compute();
    // if (e.key === 'backspace') delete();
    // if (e.key === 'escape') { 
    //     clear() 
    // }
    if (e.key === '+') {
        compute();
    }
    if (e.key === 'enter') { 
        calculator.compute()
    calculator.updateDisplay()
    }
};

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});

// document.addEventListener('keydown', logKey);

// function logKey(e) {
//     if (e.key >=0 && e.key <=0) appendNumber(e.key);    
// }

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
});

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
});

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
});

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
});

// use keypress for + and * 