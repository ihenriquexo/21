//switch case exemplo
let idade=Number(prompt("insira sua idade"))

switch (idade) {
    case 10:
        console.log("você tem 10 anos")
        console.log("segunda linha")
        break;
        case 15:
            console.log("você tem 15 anos")
            console.log("terceira linha")
        break;

    default:
        console.log("default")
        break;
}