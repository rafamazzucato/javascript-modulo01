var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");
  var intPeso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEhValido = true;
  var alturaEhValida = true;

  if (intPeso <= 0 || intPeso >= 1000) {
      pesoEhValido = false;
      tdImc.textContent = "Peso inválido";
      paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.00) {
      alturaEhValida = false;
      tdImc.textContent = "Altura inválida";
      paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
      var imc = intPeso / (altura * altura);
      tdImc.textContent = imc.toFixed(2);
  }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", funcaoQueFazAlgo);

function funcaoQueFazAlgo() {
    event.preventDefault();
    console.log("Oi, cliquei no botão.");
}
