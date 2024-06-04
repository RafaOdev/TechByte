document.addEventListener('DOMContentLoaded', selectSection);

function selectSection() {
    const list = document.querySelectorAll('.sidebar .nav__list ol li');
    const elements = document.querySelectorAll('.content__main .container .element__section');
    let selectedButton = null;

    // Função para remover a classe 'select' de todos os elementos
    const clearSelection = () => {
        elements.forEach((section) => {
            section.classList.remove('select');
        });
    };

    // Função para adicionar a classe 'select' ao elemento correspondente
    const selectElement = (buttonValue) => {
        if (buttonValue === '1') {
            document.querySelector('.content__main .container .profile').classList.add('select');
        } else if (buttonValue === '2') {
            document.querySelector('.content__main .container .articles').classList.add('select');
        } else if (buttonValue === '3') {
            document.querySelector('.content__main .container .creation').classList.add('select');
        }
    };

    list.forEach((button) => {
        button.addEventListener('click', () => {
            const buttonValue = button.getAttribute('data-value'); // Usando data-value em vez de value
            clearSelection();

            if (selectedButton !== null) {
                selectedButton.classList.remove('activate');
            }

            selectElement(buttonValue);
            button.classList.add('activate');
            selectedButton = button;
        });
    });

    // Aciona o clique no primeiro botão da lista ao carregar a página
    if (list.length > 0) {
        list[0].click();
    }
}
