
//Parameters
const principalAmount = document.getElementById("principal-amount");
const monthlyContribution = document.getElementById("monthly-contribution");
const time = document.getElementById("time");
const rate = document.getElementById("rate");
const compoundFrequency = document.getElementById("compound-frequency");

//Buttons
const calculate = document.getElementById("calculate");
const reset = document.getElementById("reset");

//Results
const compoundedAmount = document.getElementById("compoundedAmount");
const profitMade = document.getElementById("profitMade");
const percentageGain = document.getElementById("percentageGain");


function compoundInterest(){

    //The Frequency Selector
    const selected = compoundFrequency.value;

    let n; 

    if (selected === "Annual") n = 1;
    else if (selected === "Semi-Annual") n = 2;
    else if (selected === "Quarterly") n = 4;
    else if (selected === "Monthly") n = 12;
    else n = 1;

    let P = Number(principalAmount.value);
    let r = (rate.value)/100;
    let pmt = monthlyContribution.value;
    let t = time.value;
    
    compoundedAmount.textContent = `$${(P * ((1 + (r / n)) ** (n * t)) + pmt * (((1 + (r / n)) ** (n * t) - 1) / (r / n))).toFixed(2)}`;

    profitMade.textContent =  `$${((P * ((1 + (r / n)) ** (n * t)) + pmt * (((1 + (r / n)) ** (n * t) - 1) / (r / n))) - P).toFixed(2)}`;

    percentageGain.textContent = `${Math.floor(((P * ((1 + (r / n)) ** (n * t)) + pmt * (((1 + (r / n)) ** (n * t) - 1) / (r / n)))/P) * 100)}%`;
}


calculate.onclick = function(){
    compoundInterest();
}


reset.onclick = function(){
    principalAmount.value = "";
    monthlyContribution.value = "";
    time.value = "";
    rate.value = "";
    compoundedAmount.textContent = "0";
    profitMade.textContent = "0";
    percentageGain.textContent = "0";
}