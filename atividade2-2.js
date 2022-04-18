/*2. Refaça o exercício 1 usando arrow functions.*/

 const soma = (numA, numB) => numA + numB; 

export const subtracao = (numA, numB) => numA - numB;

export const multiplicacao = (numA, numB)  => numA * numB;

export const divisao = (numA, numB) => {
    if (numB == 0) {
        console.log("Não é possível dividir por zero");
    }
    return numA / numB;
}