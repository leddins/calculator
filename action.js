const numbers = document.querySelectorAll(".numbers");
numbers.forEach(number => number.addEventListener("click", numberInput))

const display = document.querySelector("#display");
let leftNum = "";
let rightNum = "";
let currentOper;

const operators = document.querySelectorAll(".oper");
operators.forEach(operator => operator.addEventListener("click", process));


function operate(oper, a, b){
  if (oper == "plus"){
    return +a + +b;
  } else if (oper == "minus"){
    return a - b;
  } else if (oper == "times"){
    return a * b;
  } else if (oper == "by"){
    return a / b;
  } else {
    return null;
  }
}

function numberInput(e){
  if (display.textContent.length >= 14) return;
  const digit = e.target.textContent;
  if (digit == "." && display.textContent.includes(".")) return;
  display.textContent += digit;
}

function process(e){
  rightNum = display.textContent;
  display.textContent = "";
  if (e.target.id == "delete"){
    display.textContent = rightNum.slice(0, rightNum.length - 1);
    rightNum = display.textContent;
    return;
  } else if (e.target.id == "clear"){
    rightNum = "";
    leftNum = "";
    return;
  }
  if (leftNum){
    let result = operate(currentOper, leftNum, rightNum);
    if (result.toString().length >= 14){
      result = result.toPrecision(12);
    }
    display.textContent = result;
  }
  currentOper = e.target.id
  leftNum = rightNum;
  rightNum = "";
}
