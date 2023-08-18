
//lição dia 4
let fome=prompt("você está com fome? 1=s|2=false")
let dinheiro=prompt("você tem dinheiro? 1=s|2=n")
let restaturante=prompt("o restaurante está aberto?")
if (fome=="n"||dinheiro=="n") {
    console.log("janta em casa")
} else if (restaturante=="n") {
    console.log("delivery")
}else{
    console.log("janta no restaurante")
}