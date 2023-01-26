function showResult(valueFinalResult) {
    const mainOutput = document.querySelector('.main-result');
    mainOutput.innerHTML = valueFinalResult
    mainOutput.style.backgroundImage = "none";
}

function encrypt() {
    
    var textEncrypt = document.querySelector("#texto-entrada").value;
    let arrayMatrx = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    textEncrypt = textEncrypt.toLowerCase();

    for (let i = 0; i < arrayMatrx.length; i++) {
        if (textEncrypt.includes(arrayMatrx[i][0])) {
            textEncrypt = textEncrypt.replaceAll(arrayMatrx[i][0], arrayMatrx[i][1]);
        }
    }

    event.preventDefault()
    showResult(textEncrypt);
    return textEncrypt;

}

function descrypt() {
    var textEncrypt = document.querySelector("#texto-entrada").value;
    let arrayMatrx = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"], ["a, ai"]];

    textEncrypt = textEncrypt.toLowerCase();

    for (let i = 0; i < arrayMatrx.length; i++) {
        if (textEncrypt.includes(arrayMatrx[i][1])) {
            textEncrypt = textEncrypt.replaceAll(arrayMatrx[i][1], arrayMatrx[i][0]);
        }
    }

    event.preventDefault();
    showResult(textEncrypt);
    return textEncrypt;

}