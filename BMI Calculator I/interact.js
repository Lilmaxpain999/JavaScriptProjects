// Simple BMI calculator 

const height = document.getElementById("height");
const weight = document.getElementById("weight");
const report = document.getElementById("report");
const getReport = document.getElementById("getReport");
const reset = document.getElementById("reset");




getReport.onclick = function(){
    let heightNum = Number(height.value);
    let weightNum = Number(weight.value);

    let answer = weightNum  / heightNum ** 2;

    if (answer < 18.5){
        report.textContent = `Your BMI is ${answer.toFixed(1)} (Underweight)`;
    }
    else if (answer >= 18.5 && answer <= 24.9){
        report.textContent = `Your BMI is ${answer.toFixed(1)} (Normal Weight)`;
    }
    else if (answer >= 25.0 && answer <= 29.9){
        report.textContent = `Your BMI is ${answer.toFixed(1)} (Overweight)`;
    }
    else if (answer > 30.0){
        report.textContent = `Your BMI is ${answer.toFixed(1)} (Obese)`;
    }
}

reset.onclick = function(){
    height.value = "";
    weight.value = "";
    report.textContent = ""
}
