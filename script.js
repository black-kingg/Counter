const display = document.getElementById('#display input');
const increase = document.getElementById('.increase');
const decrease = document.getElementById('.decrease');
        
let counter = 0;
     

function increment() {        
    counter++;        
    display.value = counter;        
};   
function decrement() {        
    if (counter > 0) {        
        counter--;        
        display.value = counter;        
    }        
};
increase.addEventListener("click", increment);
decrease.addEventListener("click", decrement); 

