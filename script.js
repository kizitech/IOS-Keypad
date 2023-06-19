let active = document.querySelector('body');
let numbers = document.querySelectorAll('.buttons span')
let buttons = document.querySelectorAll('button')
let resultBox = document.querySelector('.result span')
let resultTwoBox = document.querySelector('.result-two span')
let cancelBtn = document.querySelector('#cancel')
let callBtn = document.querySelectorAll('#call')
let callingBtn = document.querySelector('.calling')
let container = document.querySelector('.container')


// FOR THE NUMBERS TO DISPLAY IN THE RESULT BOX
numbers.forEach(numbers =>{
    numbers.addEventListener('click',()=>{
        resultBox.textContent +=  numbers.textContent 
        resultTwoBox.textContent =  resultBox.textContent 
    })

    buttons.forEach(buttons =>{
        buttons.addEventListener('mousedown',()=>{
            buttons.style.transform = "scale(0.7)"
        })
        buttons.addEventListener('mouseup',()=>{
            buttons.style.transform = "none"
        })
    })
});


// FOR THE CANCEL BUTTON
cancelBtn.addEventListener('click',()=>{
    resultBox.textContent = resultBox.textContent.slice(0, -1);
});


// FOR THE CALL AND END CALL BUTTON
callBtn.forEach(callBtns =>{
    callBtns.addEventListener('click', ()=> {
        active.classList.toggle("active")
    })
});