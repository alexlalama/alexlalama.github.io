function isAlpha(inputValue, input)
{   
    if(inputValue == "")
    {
        input.focus();
        alert(input.placeholder +" must be numbers");
        return 0;
    }else if(isNaN(inputValue) == true )
    {
        input.focus();
        alert(input.placeholder +" must only be numbers");
        return 0;
    }
    else{
        return parseInt(inputValue);
    }
}
const subtotal = document.querySelector("#subtotalInput");
const rate = document.querySelector("#percentInput");
let total = document.querySelector("#total");

function calculate()
{
   

    let subtotalValue = subtotal.value; 
    let rateValue = rate.value;
    let newSubtotal, newRate;

    rateValue = rateValue/100;
    rateValue = subtotalValue * rateValue;
    newSubtotal = isAlpha(subtotalValue, subtotal);
    newRate = isAlpha(rate.value, rate);
    total.innerHTML = newRate + newSubtotal;
   
}
function clearCalculator()
{
    subtotal.value = 0;
    rate.value = 0;  
    total.innerHTML = 0;
}

