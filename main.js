function counterIncrement() {
let counterElement = document.body.querySelector(".box1 .counter-number");
let counterValue = counterElement.textContent;
counterElement.textContent = Number(counterValue) + 2;
}
setInterval(counterIncrement,1401);

function walletsIncrement() {
    let counterElement = document.body.querySelector(".box2 .counter-number");
    let counterValue = counterElement.textContent;
    counterElement.textContent = Number(counterValue) + 2;
    }
setInterval (walletsIncrement,5000);

function validatorIncrement() {
    let counterElement = document.body.querySelector(".box3 .counter-number");
    let counterValue = counterElement.textContent;
    counterElement.textContent = Number(counterValue) + 2;
    }
setInterval (validatorIncrement,60000);

//Topics Window
let topicSide = document.body.querySelector(".window-topic:nth-child(2)");
function nextPage(){
}

topicSide.addEventListener('click',nextPage);