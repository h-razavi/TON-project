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
let topicSide = document.body.querySelectorAll(".window-topic");
let topicWindow=document.body.querySelectorAll('window-main');
topicSide.forEach(function topicIterator(topic,index) {
    topic.addEventListener("click", function onClick(e) {
        topicSide.forEach(function disableTopic(element){
            element.classList.remove("selected-topic");
        });
        let elementSelected=e.target;
        elementSelected.classList.add("selected-topic");
        topicWindow.forEach(function hideContent(element){
            element.classList.remove('window-shown');
        });
        let shownContent = topicSide[index];
        shownContent.classList.add('window-shown');
    });

});
topicSide[0].classList.add("selected-topic");
// topicWindow[0].classList.add('window-shown');
