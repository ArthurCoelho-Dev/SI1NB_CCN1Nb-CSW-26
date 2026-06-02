document.getElementById('calcular').addEventListener('click', CalcularIdade);

function CalcularIdade() {
    let diaNasc = Number(document.getElementById("dia").value);
    let mesNasc = Number(document.getElementById("mes").value);
    let anoNasc = Number(document.getElementById("ano").value);

    let hoje = new Date();
    let anoatual = hoje.getFullYear();
    let mesatual = hoje.getMonth() + 1;
    let diaatual = hoje.getDate();

    if (diaNasc <= 0 || diaNasc > 31 || mesNasc <= 0 || mesNasc > 12 || anoNasc <= 0) {
        alert("Digite uma data de nascimento válida");
        return;
    }

    let IdadeAtual = anoatual - anoNasc;

    let dataHoje = new Date(anoatual, hoje.getMonth(), diaatual);
    let dataAniversario = new Date(anoatual, mesNasc - 1, diaNasc);

    if (dataHoje < dataAniversario) {
        IdadeAtual--;
    }

    document.getElementById("resultado").textContent = `Sua idade é: ${IdadeAtual} anos.`;
}