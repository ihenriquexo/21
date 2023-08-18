//dia 4 lição 2
let nome=prompt("digite seu nome")
let idade=parseInt(prompt("idade"))
let carta=prompt("tem carta de motorista s=sim|n=não")
let carro=prompt("tem carro s=sim|n=não")

if (idade<18||carta==="n") {
    console.log(nome+", não pode dirigir")
}else if(carro=="n"){
    console.log(nome+", pode dirigir mas não tem carro")
}else{
    console.log(nome+", você será o motorista")
}