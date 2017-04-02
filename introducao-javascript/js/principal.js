var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

var primeiroPaciente = document.querySelector('#primeiro-paciente');
var tdPedo = primeiroPaciente.querySelector(".info-peso");
var tdAltura = primeiroPaciente.querySelector(".info-altura");
var tdImc = primeiroPaciente.querySelector(".info-imc");
var intPeso = tdPedo.textContent;
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhValida = true;

if (intPeso <= 0 || intPeso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
}

if (pesoEhValido && alturaEhValida) {
    var imc = intPeso / (altura * altura);
    tdImc.textContent = imc;
}
