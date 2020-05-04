const display = document.querySelector("#display");
let leftNum = "";
let rightNum = "";
let currentOper = "enter";
delayClear = false;

const numbers = document.querySelectorAll(".numbers");
numbers.forEach(number => number.addEventListener("click", numberInput))

const operators = document.querySelectorAll(".oper");
operators.forEach(operator => operator.addEventListener("click", process));

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearField);

const deleteOne = document.querySelector("#delete");
deleteOne.addEventListener("click", deleteDig);



function clearField(){
  display.textContent = "";
  rightNum = "";
  leftNum = "";
  currentOper = "enter";
}

function deleteDig(){
  console.log("delayClear = " + delayClear)
  if (delayClear) return;
  display.textContent = display.textContent.slice(0, display.textContent.length - 1);
}

function operate(oper, a, b){
  if (oper == "plus"){
    return a + b;
  } else if (oper == "minus"){
    return a - b;
  } else if (oper == "times"){
    return a * b;
  } else if (oper == "by"){
    return a / b;
  } else {
    return display.textContent;
  }
}

function numberInput(e){
  if (delayClear){
    display.textContent = "";
    delayClear = false;
  }
  if (display.textContent.length >= 14) return;
  const digit = e.target.textContent;
  if (digit == "." && display.textContent.includes(".")) return;
  display.textContent += digit;
}

function process(e){
  if (delayClear) return;
  rightNum = display.textContent;
  let result = +operate(currentOper, +leftNum, +rightNum);
  if (result.toString().length >= 14){
    result = result.toPrecision(11);
  }
  display.textContent = result.toString();
  console.log(leftNum + " " + currentOper + " " + rightNum + " = " + result);
  leftNum = result;
  delayClear = true;
  currentOper = e.target.id
}
