const plus = document.querySelector('.increase');
const minus = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
let number = document.querySelector('.number');


let count = number.textContent;
function increase(){
    count++;
    number.textContent = count;
}
function decrease(){
    count--;
    number.textContent = count;
}
function resetCount(){
    count = 0;
    number.textContent = count;
}
plus.addEventListener('click', increase);
minus.addEventListener('click', decrease);
reset.addEventListener('click', resetCount);