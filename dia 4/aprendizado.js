
let idade = Number(prompt("idade"))
let nome = prompt("nome")
//| == igual | != diferente | < menor que | > maior que | <= >= maior e menor ou igual | 
//| === compara pra ve se é igual o valor e o tipo| !== compara pra ve se o valor e o tipo é diferente |
if (idade<=10) {
    console.log("você tem 10 ou menos anos")
}else{
    console.log("você tem 10 ou mais anos")
}

// escopos

if (idade<=10) {
      let dentroDoEscopo = "giovanni"
console.log(dentroDoEscopo)
    console.log("você tem 10 ou menos anos")
    if (true) {
        console.log("dentro terceiro escopo")
console.log(dentroDoEscopo)
    }
}else{
    console.log("você tem 10 ou mais anos")
}
console.log("sai do escopo do if")
console.log(dentroDoEscopo)

 E | OU

if (idade===18&&nome==="henrique") {
    console.log("você tem 18 e seu nome é henrique")
}else if (idade===18||nome==="henrique") {
        console.log("você tem 18 ou seu nome é henrique")
} else {console.log("seu nome não é henrique e você não tem 18 anos")
    
}