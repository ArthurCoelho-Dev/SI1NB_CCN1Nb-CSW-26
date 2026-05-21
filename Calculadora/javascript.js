document.writeln("Olá, Mundo!");
document.writeln("<h2>Bem-vindo ao JavaScript</h2>");
// window.alert("Está é uma mensagem de alerta!");
document.getElementById("Titulo").innerHTML = "Aprendendo Javascript com o melhor professor da UVV!!";


let nome = prompt("Digite seu nome:");

document.getElementById("novafrase").innerHTML = "Olá, " + nome + "! Seja bem vindo ao JavaScript!";

document.getElementById("novafrase").style.color = "darkgreen"
document.getElementById("novafrase").style.fontsize = "80px"
document.getElementById("novafrase").style.fontFamily = "papyrus"


function exibirMensagem() {
    let nome = document.getElementById("nome").value;
document.getElementById("novafrase").innerHTML = "Olá, " + nome + "! Seja bem vindo ao JavaScript!";
document.getElementById("novafrase").style.color = "orange";
document.getElementById("novafrase").style.fontsize = "200px";
document.getElementById("novafrase").style.fontFamily = "papyrus";
}