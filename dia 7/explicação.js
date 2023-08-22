//while-enquanto

let condicao=true

while (condicao) {
    let idade = Number(prompt("sua idade"))
    if (idade<18) {
        console.log("você é menor de idade")
        condicao=false
    }
}

console.log("acabou o while")
//outra variação
let idade=18
while (idade>=18) {
    idade = Number(prompt("sua idade"))
    console.log(idade)
}console.log("você é menor de idade")

// outra estrutura | Do while
idade = 17
do{
    idade = Number(prompt("sua idade"))
    console.log(idade)
}while (idade>=18) {
    
}