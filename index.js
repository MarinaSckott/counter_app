let button = document.querySelector('button');
let counterText = document.querySelector('.counter')
let buttonReset = document.querySelector('.reset');
let counter = 0;
button.addEventListener('click', function () {
    counter = counter + 1;
    counterText.innerText = counter;
})
buttonReset.addEventListener('click', function () {
    counter = 0;
    counterText.innerText = counter;
})
