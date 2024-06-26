/*select category camp*/
function select__category(){
    let box__category = document.querySelector('.category');
    let all__categorys = document.querySelector('.all__category');
    let button__category = document.querySelectorAll('.btn__category');
    let category = document.getElementById('category');
    let icon = document.querySelector('.category .icon i');
    let select__button = null;

    button__category.forEach((button) =>{
        button.addEventListener('click', () => {
            const button__value = button.value;
            category.setAttribute('data-value', button__value);

            if(select__button !== null){
                select__button.classList.remove('button__select');
            }
            button.classList.add('button__select');
            select__button = button;

            if(icon.classList.contains('fa-caret-up')){
                icon.classList.remove('fa-caret-up');
                icon.classList.add('fa-caret-down');

                box__category.classList.remove('select__category');
                all__categorys.style.display = 'none';
            }

            category.classList.add('select__span')
            category.innerHTML = button__value;
        })
    })


    box__category.addEventListener('click', () => {
        if(icon.classList.contains('fa-caret-down')){
            icon.classList.remove('fa-caret-down');
            icon.classList.add('fa-caret-up');

            box__category.classList.add('select__category');
            all__categorys.style.display = 'flex';
        }else {
            icon.classList.remove('fa-caret-up');
            icon.classList.add('fa-caret-down');

            box__category.classList.remove('select__category');
            all__categorys.style.display = 'none';
        }
    })
}

/*Select visibility camp*/
function select__privacy(){
    let box__visibility = document.querySelector('.box__visibility .visibility');
    let box__select__visbility = document.querySelector('.all__visibility');
    let button__privacy = document.querySelectorAll('.all__visibility button');
    let visibility = document.getElementById('visibility');
    let icon = document.querySelector('.visibility .icon i');
    let select__button = null;

    button__privacy.forEach((button) => {
        button.addEventListener('click', () =>{
            const value = button.value;
            visibility.setAttribute('data-value', value);

            if(select__button !== null){
                select__button.classList.remove('button__visibility__select');
            }

            button.classList.add('button__visibility__select');
            select__button = button;

            if(icon.classList.contains('fa-caret-up')){
                icon.classList.remove('fa-caret-up');
                icon.classList.add('fa-caret-down');

                box__select__visbility.style.display = 'none';
            }

            visibility.classList.add('span__visibility');
            visibility.innerHTML = value;
        })
    })

    box__visibility.addEventListener('click', () => {
        if(icon.classList.contains('fa-caret-down')){
            icon.classList.remove('fa-caret-down');
            icon.classList.add('fa-caret-up');

            box__select__visbility.style.display = 'flex';
        } else {
            icon.classList.remove('fa-caret-up');
            icon.classList.add('fa-caret-down');
            
            box__select__visbility.style.display = 'none';
        }   
    })
}


/*zone selection button*/
function select__section(){
    const selection__buttons = document.querySelectorAll('.top__box .button__details button');
    const elements = document.querySelectorAll('.box__creator .content .element');
    let select__button = null;

    selection__buttons.forEach((button) => {
        button.addEventListener('click', () =>{
            const button__value = button.value;
            const details = button__value === 'details';
            const content = button__value === 'content';
            const visibility = button__value === 'visibility';
            
            elements.forEach((section) => {
                section.classList.remove('select');
            })
          
            if(select__button !== null){
                select__button.classList.remove('activate');
            }

            if(details){
                document.querySelector('.content__details').classList.add('select');
            } else if(content){
                document.querySelector('.content__create').classList.add('select');
            }else if(visibility){
                document.querySelector('.content__visibility').classList.add('select');
            }
            
            button.classList.add('activate');
            select__button = button;
        });
    });

    if(selection__buttons.length > 0){
        selection__buttons[0].click();
    }
}


document.addEventListener('DOMContentLoaded', select__section);
document.addEventListener('DOMContentLoaded', select__privacy);
document.addEventListener('DOMContentLoaded', select__category);