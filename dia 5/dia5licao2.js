let posto=prompt("deseja 1=gas|2=alcol|3=calib")
switch (posto) {
    case "1":
        let valorG=Number(prompt("qual o valor?"))
        console.log(valorG/5," litros de gas");
        break;
        case "2":
            let valorA=Number(prompt("qual o valor?"))
            console.log(valorA/3," litros de alcu")
        break;
        case "3":
            console.log("pneus calibrados com sucesso!")
        break;

    default:
        console.log("opção invalida")
        break;
}