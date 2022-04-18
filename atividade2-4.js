/**4. Escreva um script que apresenta as seguintes operações para o usuário:
1- Soma
2- Subtração
3-Multiplicação
4- Divisão
5- Sair
O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
o objeto JSON do exercício 4 para realizar as operações aritméticas. */

// import { calculadora } from "./atividade2-3"

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


calculadora.ligada = true;

while (calculadora.ligada) {
    operacao = prompt(`SELECIONE UMA OPÇÃO:
        1 - SOMA
        2 - SUBTRACAO
        3 - MULTIPLICACAO
        4 - DIVISAO
        5 - SAIR`)

    switch (operacao) {
        case '1':
            var numA = parseFloat(prompt('Informe um valor para A: A + B'));
            var numB = parseFloat(prompt('Informe um valor para B: A + B'));
            if (isNaN(numA) || isNaN(numB)){
                alert('Numero informado invalido!')
            }
            else{
                resultado = calculadora.soma(numA, numB);
                alert('O resultado da soma é: ' + resultado)
            }
            break;
        case '2':
            var numA = parseFloat(prompt('Informe um valor para A: A - B'));
            var numB = parseFloat(prompt('Informe um valor para B: A - B'));
            if (isNaN(numA) || isNaN(numB)){
                alert('Numero informado invalido!')
            }
            else{
                resultado = calculadora.subtracao(numA, numB);
                alert('O resultado da subtração é: ' + resultado)
            }
            break;
        case '3':
            var numA = parseFloat(prompt('Informe um valor para A: A * B'));
            var numB = parseFloat(prompt('Informe um valor para B: A * B'));
            if (isNaN(numA) || isNaN(numB)){
                alert('Numero informado invalido!')
            }
            else{
                resultado = calculadora.multiplicacao(numA, numB);
                alert('O resultado da multiplicação é: ' + resultado)
            }
            break;
        case '4':
            var numA = parseFloat(prompt('Informe um valor para A: A / B'));
            var numB = parseFloat(prompt('Informe um valor para B: A / B'));
            if (isNaN(numA) || isNaN(numB)){
                alert('Numero informado invalido!')
            }
            else{
                resultado = calculadora.divisao(numA, numB);
                alert('O resultado da divisão é: ' + resultado)
            }
            break;
        case '5':
            calculadora.ligada = false
            break;
        default:
            alert("Digite uma opção valida!")
    }
}
