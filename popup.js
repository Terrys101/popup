const button = document.querySelector('button');
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector('.popup-close');



button.addEventListener('click', () =>{
// This changes pop-up popup-wrapper from display none to block when click 
    popup.style.display = 'block';


});

close.addEventListener('click', () =>{
    // This changes pop-up popup-wrapper from display block to display none when click 
        popup.style.display = 'none';
    
    
    });


