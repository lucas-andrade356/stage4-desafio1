const userName = prompt('Olá, informe seu nome:')

let numberOne = prompt(`${userName}, Informe o primeiro número:`)
let NumberTwo = prompt(`${userName}, Informe o segundo número:`)

numberOne = Number(numberOne)
NumberTwo = Number(NumberTwo)

const sum = (numberOne + NumberTwo)
const subt = (numberOne - NumberTwo)
const multp = (numberOne * NumberTwo)
const divs = (numberOne / NumberTwo)
const restDivs = (numberOne % NumberTwo)

alert(`A soma é ${sum}`)
alert(`A subtração é ${subt}`)
alert(`A multiplicação é ${multp}`)
alert(`A divisão é ${divs}`)
alert(`O resto da divisão é ${restDivs}`)

let restD = restDivs

if(restD == 0){
    alert(`A soma entre ${numberOne} e ${NumberTwo} retorna um número par.`)
} else {
    alert(`A soma entre ${numberOne} e ${NumberTwo} retorna um número impar.`)
}

if(numberOne == NumberTwo){
    alert('Os dois números informados são iguais')
} else {
    alert('Os núermos informados para os calculos são diferntes')
}

