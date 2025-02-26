let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

function teste(){
    let botao = document.getElementById("teste");
    botao.innerText = "Clicou";

    setTimeout(() =>{
        if (numeroUm == stringUm && typeof numeroUm !== typeof stringUm) {
            alert(`As variáveis ${numeroUm} e '${stringUm}' tem o mesmo valor, mas tipos diferentes.`);
        } else {
            alert(`As variáveis ${numeroUm} e '${stringUm}' não tem o mesmo valor ou são do mesmo tipo.`);
        }

        if (numeroTrinta == stringTrinta && typeof numeroTrinta == typeof stringTrinta) {
            alert(`As variáveis ${numeroTrinta} e '${numeroTrinta}' tem o mesmo valor e mesmo tipo.`);
        } else {
            alert(`As variáveis ${numeroTrinta} e '${numeroTrinta}' não tem o mesmo tipo.`);
        }

        if (numeroDez == stringDez && typeof numeroDez !== typeof stringDez) {
            alert(`As variáveis ${numeroDez} e '${stringDez}' tem o mesmo valor, mas tipos diferentes.`);
        } else {
            alert(`As variáveis ${numeroDez} e '${stringDez}' não tem o mesmo valor.`);
        }

        botao.innerText = "Clicar";
    }, 150);
}