console.clear();

var calculatorNumber = document.getElementById("calculator-number");  // Calculator number holder
var equals = document.getElementById("equals"); 
var plus = document.getElementById("plus");
var divide = document.getElementById("divide"); 
var minus = document.getElementById("minus");
var number = 0;
var currentNumber = 0;
function buttonVar(name) // Select HTML element
{
  return document.querySelector(`#button${name}`);
}

function clearFunction() // Clear calculator number
{
  calculatorNumber.innerHTML = 0;  
}


function equals(){
    return parseInt(calculatorNumber.innerHTML);
}
var currentNumber = 0;
var number = 0;
var input = 0;
for(let i=0; i <= 9; i++)
  {
    buttonVar(i).addEventListener("click", function(){
    currentNumber = parseInt(buttonVar(i).innerHTML);
    return currentNumber;
    });
  }

function add(){
  number += cutterNumber;
  console.log("4");
  return number; 
}
