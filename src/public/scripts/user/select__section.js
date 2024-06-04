function select__section(){
    const list = document.querySelectorAll('.sidebar .nav__list ol li');
    const elements = document.querySelectorAll('.content__main .container .element__section');
    let select__button = null;

    list.forEach((button) => {
        button.addEventListener('click', () =>{
            const button__value = button.value;
            const profile = button__value == '1';
            const articles = button__value == '2';
            const create__articles = button__value == '3';
           
            elements.forEach((section) => {
                section.classList.remove('select');
            })

            if(select__button !== null) select__button.classList.remove('activate');

            const select__element = () => {
                if(profile){
                    document.querySelector('.content__main .container .profile').classList.add('select');
                }else if(articles){
                    document.querySelector('.content__main .container .articles').  classList.add('select');
                }else if(create__articles){
                    document.querySelector('.content__main .container .creation').classList.add('select');
                }
    
            }

            select__element();
            button.classList.add('activate');
            select__button = button;
        })
    })

    if(list.length > 0){
        list[0].click();
    }
}

document.addEventListener('DOMContentLoaded', select__section);