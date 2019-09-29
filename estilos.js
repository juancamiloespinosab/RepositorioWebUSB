document.addEventListener('focusin', txtFocusIn);
document.addEventListener('focusout', txtFocusOut);

function txtFocusIn(e){

    if (e.target.classList.contains("txt")){
        e.target.nextElementSibling.classList.add('borderOn');
        if (e.target.value == ""){
            e.target.previousElementSibling.classList.add('labelOn');
        }
       
    }
}

function txtFocusOut(e){

    if (e.target.classList.contains("txt")){
        e.target.nextElementSibling.classList.remove('borderOn');
        if (e.target.value == ""){
            e.target.previousElementSibling.classList.remove('labelOn');
        }
       
    }
}