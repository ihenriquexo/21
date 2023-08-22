let notas=[]
let sexos=[]
let somaNotas=0
let quantH=0
let quantM=0
contador=0
cont=true
while (cont) {
    let nota=Number(prompt("nota"))
    nota[contador]=notas
    somaNotas+=nota
    let sexo=prompt("sexo|f ou m")
    sexos[contador]=sexo
    if (sexo=="f"&&nota>7) {
        quantM++
    }else if (sexo=="m") {
        quantH++

    }
    let conti=prompt("1=parar")
    if (conti=="1") {
        cont=false
    }
    contador++
}



let maiorNota
for (let i = 0; i < sexos.length; i++) {
    maiorNota=notas>=notas[i]
console.log(maiorNota)
}



console.log("media "+somaNotas/sexos.length)
console.log("quant homem "+quantH)
console.log("mulher+7 "+quantM)
console.log("maiornotahomem "+maiorNota)