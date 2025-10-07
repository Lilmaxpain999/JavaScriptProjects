

// Temperature COnversion App

//Getting all the IDs from html
const Value = document.getElementById("value");
const fc = document.getElementById("fc");
const cf = document.getElementById("cf");
const submit = document.getElementById("submit");
const answer = document.getElementById("answer");


//Converting farenheit to celcius
function fcFormula(theValue){
    theValue = Number(Value.value);
    farenheit = (theValue - 32) * (5/9);
    if(isNaN(theValue)){
        answer.textContent = `${farenheit.toFixed(2)} is NOT a number value`;
    }else{
        answer.textContent = `${farenheit.toFixed(2)}°C`;
    }
    

}


//Converting celcius to farenheit
function cfFormula(theValue){
    theValue = Number(Value.value);
    celcius = ((9/5) * theValue) + 32;
    if(isNaN(theValue)){
        answer.textContent = `${celcius.toFixed(2)} is NOT a number value`;
    }else{
        answer.textContent = `${celcius.toFixed(2)}°F`;
    }
    

}


//Onlick method for submit button to calculate

submit.onclick = function(){
    if(fc.checked){
        fcFormula(Value);
    }
    else if(cf.checked){
        cfFormula(Value);
    }
    else{
        answer.textContent = "Select a unit";
    }


}
