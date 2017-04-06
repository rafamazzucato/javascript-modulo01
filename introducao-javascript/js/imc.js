var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");
  var intPeso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEhValido = validaPeso(intPeso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
      pesoEhValido = false;
      tdImc.textContent = "Peso inválido";
      paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
      alturaEhValida = false;
      tdImc.textContent = "Altura inválida";
      paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
      tdImc.textContent = calculaImc(intPeso, altura);
  }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso >= 0 && peso < 1000) {
      return true;
    }else{
      return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.00) {
      return true;
    }else{
      return false;
    }
}
