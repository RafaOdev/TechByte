const list = document.querySelectorAll('.sidebar .nav__list ol li');
const button__sibebar = document.querySelector('.mobile__nav .icon button');
const section__nav = document.querySelector('main .sidebar');
const content__main = document.querySelector('main .content__main');
const overlay = document.querySelector('main .content__main .overlay');

button__sibebar.addEventListener('click', () => {
    if(!section__nav.classList.contains('select__sidebar')){
        section__nav.classList.add('select__sidebar');
        content__main.classList.add('block__nav');
        overlay.classList.add('over__block');
    } else {
        section__nav.classList.remove('select__sidebar');
        content__main.classList.remove('block__nav');
        overlay.classList.remove('over__block');
    }
})

list.forEach((click) => {
    click.addEventListener('click', () => {
        section__nav.classList.remove('select__sidebar');
        content__main.classList.remove('block__nav');
        overlay.classList.remove('over__block');
    })
})