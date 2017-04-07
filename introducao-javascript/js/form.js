var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", funcaoQueFazAlgo);

function funcaoQueFazAlgo() {
    event.preventDefault();

    var formAdd = document.querySelector("#form-adicionar");
    var paciente = obtemPacienteDoFormulario(formAdd);

    var erros = validaPaciente(paciente);

    var ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = "";

    if(erros.length > 0){
        exibeMensagensDeErro(erros, ul);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(criaLinhaColunaPaciente(paciente));

    formAdd.reset();
}

function exibeMensagensDeErro(erros, ul) {
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function criaLinhaColunaPaciente(paciente){
  var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente){
  var erros = [];

  if(paciente.nome.length == 0){
    erros.push("Nome inválido.");
  }

  if(paciente.peso.length == 0){
    erros.push("Peso inválido.");
  }else if(!validaPeso(paciente.peso)){
    erros.push("Peso inválido.");
  }

  if(paciente.altura.length == 0){
    erros.push("Altura inválida.");
  }else if(!validaAltura(paciente.altura)){
    erros.push("Altura inválida.");
  }

  if(paciente.gordura.length == 0){
    erros.push("% de Gordura inválido.");
  }
  return erros;
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = criaLinhaColunaPaciente(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
