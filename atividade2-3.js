/*3. Crie um objeto JSON que abriga todas as operações do exercício 2. */
const soma = (numA, numB) => numA + numB; 

const subtracao = (numA, numB) => numA - numB;

const multiplicacao = (numA, numB)  => numA * numB;

const divisao = (numA, numB) => {
    if (numB == 0) {
        console.log("Não é possível dividir por zero");
    }
    return numA / numB;
}

 const calculadora = {
    soma: soma,
    subtracao: subtracao,
    multiplicacao: multiplicacao,
    divisao: divisao,
}

console.log(calculadora.soma(1,7));