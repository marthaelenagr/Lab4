/* 
Martha Elena García Ramos
A01139413
*/

//Variables
let input = document.getElementsByClassName("inputNumber")[0];
let left, right;
let operator = ""; 
let operation = "";
let result = document.getElementById("resultValue");
let log = document.getElementById("logInformation");
let res=0;

//Buttons
let resetBtn = document.getElementsByClassName("resetButton")[0];
let equalBtn = document.getElementsByClassName("equalButton")[0];
let addBtn = document.getElementById("addButton");
let subsBtn = document.getElementById("substractButton");
let multBtn = document.getElementById("multiplicationButton");
let divBtn = document.getElementById("divisionButton");

resetBtn.addEventListener("click", event => {
    event.preventDefault();
    reset();
  });
  
equalBtn.addEventListener("click", event => {
    event.preventDefault();
    right = Number(input.value);
    acum(operator);
    equal();
    showResult();
});
  
addBtn.addEventListener("click", event => {
    event.preventDefault();
    opClick(event.target.innerText);
});
  
subsBtn.addEventListener("click", event => {
    event.preventDefault();
    opClick(event.target.innerText);
});
  
multBtn.addEventListener("click", event => {
    event.preventDefault();
    opClick(event.target.innerText);
});
  
divBtn.addEventListener("click", event => {
    event.preventDefault();
    opClick(event.target.innerText);
});

  //Functions
function add() {
    return left + right;
}
  
function subs() {
    return left - right;
}
  
function mult() {
    return left * right;
}
  
function div() {
    return left / right;
}

function reset() {
    input.value = "";
    left = 0;
    right = 0;
    operator = "";
    operation = "";
    result.value = "";
    res = 0;
    log.value = "";
}

function equal() {
    switch (operator) {
      case "+":
        res= add();
        break;
      case "-":
        res = subs();
        break;
      case "*":
        res = mult();
        break;
      case "/":
        res = div();
        break;
    }
}

function acum(op) {
    operation += " " + op + " " + String(right);
}

function clear() { //clears input
    input.value = "";
}

function showResult() {
    if (res || res === 0) {
      if (operator) {
        result.value = res;
        operation += " = " + String(res);
      } 
      else {
        result.value = right;
        operation += " = " + String(right);
      }
      log.value += operation.trim() + "\n";
      operation = "";
      operator = "";
      clear();
    }
}
  
function opClick(op) { //checks when a operator button was clicked to do the operation
    if (Number(input.value) || input.value === "0") {
      if (operator) {
        right = Number(input.value);
        acum(operator);
        equal();
        operator = op;
        left = res;
        } 
        else {
            left = Number(input.value);
            operation += left;
            operator = op;
        }
        clear();
    }
}



