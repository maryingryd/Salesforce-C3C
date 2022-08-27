const elementLado1 = document.querySelector("#lado1");
const elementLado2 = document.querySelector("#lado2");
const elementLado3 = document.querySelector("#lado3");
const tipo = document.querySelector("#tipo");
const calular = document.querySelector("#calcular");
const limpar = document.querySelector("#limpar");
const aviso = document.querySelector("#aviso");

calcular.onclick = () => {
    let lado1 = Number.parseFloat(elementLado1.value);
    let lado2 = Number.parseFloat(elementLado2.value);
    let lado3 = Number.parseFloat(elementLado3.value);
    if (lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado1 + lado2)) {
        if (lado1 == lado2 && lado2 == lado3) {
            tipo.value = "Equilátero";
        } else if (lado1 == lado2 || lado1 == lado3 || lado3 == lado2) {
            tipo.value = "Isóceles";
        } else {
            tipo.value = "Escaleno";
        }
    } else {
        aviso.innerText = " Um dos lados do triângulo deve ser menor que a soma dos outros dois";
    }
}
limpar.onclick = () => {
    lado1.value = "";
    lado2.value = "";
    lado3.value = "";
    tipo.value = "";
    aviso.innerText = "";
}