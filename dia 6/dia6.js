//for-estrutura de repetição

let tabuada=Number(prompt("tabuada desejada"))

console.log(tabuada+"5x0="+tabuada*0)
console.log(tabuada+"5x1="+tabuada*1)
console.log(tabuada+"5x2="+tabuada*2)
console.log(tabuada+"5x3="+tabuada*3)
console.log(tabuada+"5x4="+tabuada*4)
console.log(tabuada+"5x5="+tabuada*5)

for (let contador = 0; contador <= 10; contador++) {
    console.log(tabuada+"x"+contador+"="+tabuada*contador)
    
}