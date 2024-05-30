/*category camp*/
let box__category = document.querySelector('.category');
let text__category = document.getElementById('category');
let all__categorys = document.querySelector('.all__category');
let button__category = document.querySelectorAll('.btn__category');
let category = document.getElementById('category');
let box__icon = document.querySelector('.category .icon');
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