let nome;
let idade;
let linguagem;
let resposta;

setTimeout(() => {
    nome = formatarNome(prompt("Qual o seu nome ?"));

    idade = Number(prompt("Qual sua idade ?"));

    while (isNaN(idade) || idade <= 0) {
        idade = Number(prompt("Valor inválido! Digite sua idade corretamente (apenas números maiores que 0):"));
    }

    linguagem = formatarNome(prompt("Qual linguagem de programação você está estudando?"));

    alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem} !`)

    resposta = Number(prompt(`Você gosta de estudar ${linguagem} ? Digite o número:\n\n 1 para sim;\n 2 para não.`));

    while (isNaN(resposta) || resposta != 1 && resposta != 2) {
        resposta = Number(prompt(`Valor inválido! Você gosta de estudar ${linguagem} ? Digite o número:\n\n 1 para sim;\n 2 para não.`));
    }

    if (resposta === 1){
        alert(`Muito bom! Continue estudando e você terá muito sucesso.`);
    } else {
        alert(`Ahh que pena... Já tentou aprender outras linguagens?`);
    }

    function formatarNome(nome) {
        return nome.split(" ") // Divide o nome em palavras
                .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()) // Capitaliza cada palavra
                .join(" "); // Junta tudo de volta
    }
}, 150);