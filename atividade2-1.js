
/*1. Escreva funções que implementam as quatro operações aritméticas. Todas elas devem
receber dois valores numéricos como parâmetro e devolver o valor de sua respectiva
operação. Faça a implementação usando a palavra function para todas elas.*/

function soma(numA, numB) {
    return numA + numB;
} 

function subtracao(numA, numB) {
    return numA - numB;
}

function multiplicacao(numA, numB) {
    return numA * numB;
}

function divisao(numA, numB) {
    if (numB == 0) {
        console.log("Não é possível dividir por zero");
    }
    return numA / numB;
}
console.log(soma(1,7))