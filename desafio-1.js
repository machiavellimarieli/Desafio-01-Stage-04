/*
Nesse desafio, você irá solicitar ao usuário que ele 
insira dois números e, a partir daí, calcular:

A soma dos dois números;
A subtração dos dois números;
A multiplicação dos dois números;
A divisão dos dois números;
O resto da divisão dos dois números;
Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

Verifique se a soma dos dois números é par (ou ímpar);
Verifique se os dois números inseridos são iguais (ou diferentes).

*/


let firstNumber = Number(prompt("Digite o primeiro número:"))
let secondNumber = Number(prompt("Digite o segundo número:"))

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const resDiv = firstNumber % secondNumber

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${resDiv}`)

if(resDiv === 0){
  alert(`A soma dos dois números é par: ${sum}`)
} else {
  alert(`A soma dos dois números é ímpar: ${sum}`)
}

if(firstNumber === secondNumber){
  alert("Os dois números são iguais")
} else {
  alert("Os dois números são diferentes")
}