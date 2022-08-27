const notaElement = document.querySelector("#nota");
const msgElement = document.querySelector("#msgErro");
const resultadoElement = document.querySelector("#resultado");
const notaFinalElement = document.querySelector("#notaFinal");
const calcularElement = document.querySelector("#calcularBtn");

let nota = null;

notaElement.onchange = () => {
    nota = notaElement.value;

    if (nota < 0 || nota > 100) {
        msgElement.innerText = "Digite uma nota de 0 a 100.";
        nota = null;
    } else {
        msgElement.innerText = "";
    }
}

calcularElement.onclick = () => {
    if (nota == null) {
        notaElement.value = "";
        resultadoElement.value = "";
        notaFinalElement.innerText = "";
        return;
    }

    let aprovado;
    let notaFinal;

    let resto = nota % 5;
    if (resto <= 2) {
        notaFinal = nota;
    } else {
        notaFinal = (nota - (nota % 5)) + 5;
    }

    notaFinalElement.innerText = notaFinal;

    if (notaFinal >= 40) {
        aprovado = true;
    } else {
        aprovado = false;
    }

    if (aprovado) {
        resultadoElement.value = "Aprovado";
    } else {
        resultadoElement.value = "Reprovado";
    }
    
}