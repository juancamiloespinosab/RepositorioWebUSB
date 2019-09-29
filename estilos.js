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

function setCaretPosition(elemId, caretPos) {
    var elem = document.getElementById(elemId);

    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}