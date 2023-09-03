console.log("JS connected...")

let operands  = document.getElementsByClassName("operand");
let operators = document.getElementsByClassName("operator");
let prev = document.getElementsByClassName("previous")[0];
let curr = document.getElementsByClassName("current")[0];
let all_clear = document.getElementsByClassName("all-clear")[0];
let last_clear = document.getElementsByClassName("last-clear")[0];
let equals = document.getElementsByClassName("equals")[0];

for (let i=0; i<operands.length; i++) {
    operands[i].onclick = function(){appendOperand(operands[i].innerHTML)};
}

for (let i=0; i<operators.length; i++) {
    operators[i].onclick = function(){appendOperator(operators[i].innerHTML)};
}

all_clear.onclick = function(){clearCurrentScreen()};
last_clear.onclick = function(){removeLastTerm()};
equals.onclick = function(){evaluate()};



function evaluate() {
    console.log("Evaluating...")
    if (curr.innerHTML == "") {return};
    prev.innerHTML = curr.innerHTML + "=" + eval(curr.innerHTML);
    curr.innerHTML = "";
}

function appendOperand(operand) {
    console.log("Appending operand...");
    curr.innerHTML += operand;
}

function appendOperator(operator) {
    console.log("Appending operator...");
    let last_val = curr.innerHTML.charAt(curr.innerHTML.length - 1);

    if (last_val == "") { return; }
    if (isNaN(last_val)) {
        removeLastTerm();
    }
    
    curr.innerHTML += operator;
}

function removeLastTerm(){
    console.log("Removing last term...");
    curr.innerHTML = curr.innerHTML.slice(0, -1);
}

function clearCurrentScreen(){
    console.log("Clearing screen");
    curr.innerHTML = "";
}