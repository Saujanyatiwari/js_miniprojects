const buttons = document.querySelectorAll('button');
const screen = document.getElementById('result');
console.log(buttons);

buttons.forEach(function(b){
    b.addEventListener('click' , function(e){
        console.log(e.target);
        
    })
})