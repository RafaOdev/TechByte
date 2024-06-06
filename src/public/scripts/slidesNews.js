/*Javascript main news slides*/
let elements = document.querySelectorAll('.news__slides');
let btns = document.querySelectorAll('.slide__btn');
let current__slide = 1;

let manualNav = function(manual){

    elements.forEach((slide) => {
        slide.classList.remove('activate');
        btns.forEach((btn) => {
           btn.classList.remove('activate'); 
        });
    });

    elements[manual].classList.add('activate');
    btns[manual].classList.add('activate');
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
    });
});

//test

let timeOut = function(activateClass){
    let activate = document.getElementsByClassName('activate');
    let i = 1;

    let time = () => {
        setTimeout(function(){
            [...activate].forEach((activateSlide) => {
                activateSlide.classList.remove('activate')
            });
            elements[i].classList.add('activate');
            btns[i].classList.add('activate');
            i++;

            if(elements.length == i){
                i = 0;
            }

            if(i >= elements.length){
                return;
            }

            time();
        }, 10000);
    }

    time()
}

timeOut();