console.clear();
// const arrayOfButtons = [zero, one, two, three, four, five, six, seven, eight, nine];

function buttonVar(name) // Select HTML element
{
  return document.querySelector(`button#${name}`);
}
var zero = buttonVar("button0");
var one = buttonVar("button1");
var two = buttonVar("button2");
var three = buttonVar("button3");
var four = buttonVar("button4");
var five = buttonVar("button5");
var six = buttonVar("button6");
var seven = buttonVar("button7");
var eight = buttonVar("button8");
var nine = buttonVar("button9");

var calculatorNumber = document.getElementById("p#calculator-number").innerHTML;  // Calculator number holder
calculatorNumber.innerHTML = Number("0");
console.log(calculatorNumber.innerHTML);
function clearFunction() // Clear calculator number
{
  calculatorNumber.innerHTML= "0";  
  Number(calculatorNumber);
  console.log(3);
  return 0;
}
// var answered = false;
/*while(!answered)
{
  for(let i = 0; i <= arrayOfButtons.length-1; i++)
    {
      parseInt(arrayOfButtons[i]);
      console.log(arrayOfButtons[i]);
      answered= true;
      arrayOfButtons[i].addEventListener("click",function(){
          calculatorNumber = arrayOfButtons[i];
          console.log(calculatorNumber);
      })
    }
}
*/
function add()
{
  var sum =0;
  sum += calculatorNumber;
  return sum;
}
