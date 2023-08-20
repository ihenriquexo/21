//switch case lição 1
let numUm = Number(prompt("num 1"))
let numDois = Number(prompt("num 2"))
let conta=prompt("qual conta você quer fazer? 1=+|2=-|3=*|4=/")
switch (conta) {
    case "1":
        console.log(numUm,"+",numDois,"=",numUm+numDois)
        break;
        case "2":
            console.log(numUm,"-",numDois,"=",numUm-numDois)
            break;
            case "3":
                console.log(numUm,"x",numDois,"=",numUm*numDois)
                break;
                case "4":
                    console.log(numUm,"/",numDois,"=",numUm/numDois)
                    break;
                     default:
                        console.log("valor inválido")
                        break;
                        //só falta mostrar os valores e qual conta foi feita
}