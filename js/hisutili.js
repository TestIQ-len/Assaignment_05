function getInputFieldById(id){

    const inputValue = document.getElementById(id).value ;
    const inputNumber = parseFloat(inputValue) ;
    return inputNumber ;
}

function getTextFieldById(id){

    const textValue = document.getElementById(id).innerText ;
    const textNumber = parseFloat(textValue) ;
    return textNumber ;
}

function getInputFieldByIdtime(id){

    const inputValuetime = document.getElementById(id).value ;
    const inputNumbertime = parseFloat(inputValuetime) ;
    return inputNumbertime ;
}