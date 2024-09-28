const countDisplay = document.getElementById("count-display");
const incrementCounterBtn = document.getElementById("increament-count");
const resetCounterBtn = document.getElementById("reset-count");
let count = 0;

function updateDisplay(){
    countDisplay.innerText = count;
}

incrementCounterBtn.addEventListener('click', ()=>{
    count ++;
    updateDisplay();
});

resetCounterBtn.addEventListener('click', () =>{
    count =0;
    updateDisplay();
});