let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

let maxAllowedChars =  productNameInputElement.maxLength;

function updateRemainingCharacters(event){
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;
    let remainingChars = maxAllowedChars - enteredTextLength;
    remainingCharsElement.textContent = remainingChars;

    if(remainingChars < 10){
        productNameInputElement.classList.add('warning');
        remainingCharsElement.classList.add('warning');
    }else if(remainingChars >= 10){
        productNameInputElement.classList.remove('warning');
        remainingCharsElement.classList.remove('warning');
    }
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);