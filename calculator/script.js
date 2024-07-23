console.log("hello");

const buttons = document.querySelectorAll('button');
const body = document.querySelector( 'body' );

buttons.foreach((button) => {

button.addEventListener('click' , (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);

    if(e.target.id == 1)
        {
            console.log(1);
        }
})


})