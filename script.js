var screen=document.querySelector('.card-name1');


var cardholder =document.querySelector('.card-holder-name');

cardholder.addEventListener('keypress', ()=>{

    // screen.style.color= 'red';

    screen.innerHTML=cardholder.value;

})
var screen2=document.querySelector('.card-code');


var cardDigit =document.querySelector('.card-digit');

cardDigit.addEventListener('keypress', ()=>{

    screen2.innerHTML=cardDigit.value;

})
var screen3=document.querySelector('.card-pin');


var Day =document.querySelector('.day');

Day.addEventListener('keypress', ()=>{

    // screen.style.color= 'red';

    screen3.innerHTML=Day.value;

})
var screen4=document.querySelector('.card-pin2');


var Year =document.querySelector('.year');

Year.addEventListener('keypress', ()=>{

    // screen.style.color= 'red';

    screen4.innerHTML=Year.value;

})
var screen5=document.querySelector('.cvc-input');


var CVC =document.querySelector('.cvc');

CVC.addEventListener('keypress', ()=>{

    // screen.style.color= 'red';

    screen5.innerHTML=CVC.value;

})