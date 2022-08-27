const elementA = document.querySelector("#valorA");
const elementB = document.querySelector("#valorB");
const elementC = document.querySelector("#valorC");
const elementDelta = document.querySelector("#valorDelta");
const elementX1 = document.querySelector("#valorX1");
const elementX2 = document.querySelector("#valorX2");
const elementAvisoA = document.querySelector("#avisoA");
const elementAvisoDelta1 = document.querySelector("#avisoDelta1");
const elementCalcularDelta = document.querySelector("#calcularDelta");
const elementCalcularX = document.querySelector("#calcularX");

elementCalcularDelta.onclick = () => {
    let valorA = Number.parseFloat(elementA.value);
    let valorB = Number.parseFloat(elementB.value);
    let valorC = Number.parseFloat(elementC.value);
    let calcularDelta = (valorB * valorB) - 4 * (valorA * valorC);
    if (valorA != 0) {
        elementDelta.value = calcularDelta;
    } else {
        avisoA.innerText = "O valor de A deve ser maior que 0 ";
    }
}
elementCalcularX.onclick = () => {
    let valorA = Number.parseFloat(elementA.value);
    let valorB = Number.parseFloat(elementB.value);
    let valorC = Number.parseFloat(elementC.value);
    let calcularDelta = (valorB * valorB) - 4 * (valorA * valorC);
    if (calcularDelta >= 0) {
        let raizDelta = Math.sqrt(calcularDelta);
        let resultadoX1 = (- (valorB) + raizDelta) / 2 * (valorA);
        let resultadoX2 = (- (valorB) - raizDelta) / 2 * (valorA);
        elementX1.value = resultadoX1;
        elementX2.value = resultadoX2;
    } else {
        elementAvisoDelta1.innerText = "Delta é negativo"
    }
}



