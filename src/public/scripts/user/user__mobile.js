const button__sibebar = document.querySelector('.mobile__nav .icon button');
const section__nav = document.querySelector('main .sidebar');
const content__main = document.querySelector('main .content__main');

button__sibebar.addEventListener('click', () => {
    if(!section__nav.classList.contains('select__sidebar')){
        section__nav.classList.add('select__sidebar');
        content__main.classList.add('block__nav');
    } else {
        section__nav.classList.remove('select__sidebar');
        content__main.classList.remove('block__nav');
    }
})