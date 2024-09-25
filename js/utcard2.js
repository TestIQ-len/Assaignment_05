function getInputFieldById2(id){

    const inputValue2 = document.getElementById(id).value ;
    const inputNumber2 = parseFloat(inputValue2) ;
    return inputNumber2 ;
}

function getTextFieldById2(id){

    const textValue2 = document.getElementById(id).innerText ;
    const textNumber2 = parseFloat(textValue2) ;
    return textNumber2 ;
}