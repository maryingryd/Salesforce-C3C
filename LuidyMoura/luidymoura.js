const numeroElement = document.querySelector("#numero");
const resultadoElement = document.querySelector("#resultado");
const calcularElement = document.querySelector("#calcularBtn");

calcularElement.onclick = () => {
    let numero = Number.parseInt(numeroElement.value);

    let lista = gerarArray(numero);

    resultadoElement.innerText = lista.toString();
}

gerarArray = (valor) => {
    let lista = [];

    for (let i = 1; i <= valor; i++) {
        if ((i % 5) == 0 && (i % 9) == 0) {
            lista.push('LuidyMoura');
        } else if ((i % 5) == 0) {
            lista.push('Luidy');
        } else if ((i % 9) == 0) {
            lista.push('Moura');
        } else {
            lista.push(i);
        }
    }

    return lista;
}