function somar(n1,n2) {
    console.log(n1+n2)
}
function subtrair(n1,n2) {
    console.log(n1-n2)
}
function multiplicar(n1,n2) {
    console.log(n1*n2)
}
function dividir(n1,n2) {
    console.log(n1/n2)
}
function exponenciacao(n1,n2) {
    console.log(n1%n2)
}
let nu1=Number(prompt("digite o 1* numero"))
let nu2=Number(prompt("digite o 2* numero"))
let op=prompt("1=+,2=-,3=X,4=/,5=%")
switch (op) {
    case "1":
        somar(nu1,nu2)
        break
        case "2":
            subtrair(nu1,nu2)
            break
            case "3":
                multiplicar(nu1,nu2)
                break
                case "4":
                    dividir(nu1,nu2)
                    break
                    case "5":
                        exponenciacao(nu1,nu2)
                        break

    default:
        break;
}
//completa, fiz só o basico sem detalhe nenhum