/*scroll textarea desc*/
document.querySelector('.text__desc').addEventListener('input', function(){
    let textarea=this;

    textarea.style.height='auto';
    textarea.style.height=textarea.scrollHeight+'px';
})