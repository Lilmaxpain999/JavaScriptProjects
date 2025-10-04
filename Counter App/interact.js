//  INTERACTIVE COUNTER APP BY S.R. HAMID


const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const countText = document.getElementById("count");

let count = 0;

decrease.onclick = function(){
    count--;
    countText.textContent = count;
}
increase.onclick = function(){
    count++;
    countText.textContent = count;
}
reset.onclick = function(){
    count = 0;
    countText.textContent = count;
}
