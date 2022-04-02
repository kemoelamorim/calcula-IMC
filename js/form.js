var submit = document.querySelector('.adicionar')
submit.addEventListener('click', (event) => {
  event.preventDefault()
  adiciona()
})

function adiciona(){
  var form = document.querySelector('form');
  var paciente = obtemPacienteDosFormurario(form)
  var erros = validaPaciente(paciente);
  console.log(erros)
  if(erros.length > 0 ){
      exibeMensagensDeErro(erros)
      return;
  }
  var pacienteTr = montaTr(paciente)
  pacienteTr.classList.add("paciente")

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
  form.reset();
  document.querySelector("#mensagem-de-erro").innerHTML = "";

}

function obtemPacienteDosFormurario(form){
    paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    
    var tdNome = montaTd(paciente.nome, "info-nome")
    var tdPeso = montaTd(paciente.peso, "info-peso")
    var tdAltura = montaTd(paciente.altura, "info-altura")
    var tdGorgura = montaTd(paciente.gordura, "info-gordura")
    var tdImc = montaTd(paciente.imc, "info-imc")
   
    
    var pacienteTr = document.createElement("tr");

    pacienteTr.appendChild(tdNome);
    pacienteTr.appendChild(tdPeso);
    pacienteTr.appendChild(tdAltura);
    pacienteTr.appendChild(tdGorgura);
    pacienteTr.appendChild(tdImc);
    
    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
function validaPaciente(paciente){
    var erros = []
    if(paciente.nome.length <= 0){
        erros.push("Nome Inválido")
    }
    if(!validaPeso(paciente.peso) || paciente.peso.length == 0){
        erros.push("Peso inválido");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida");
    }
    if(paciente.gordura.length == 0){
        erros.push("% Gordura inválida");
    }
    return erros;
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-de-erro");
    ul.innerHTML = "";
    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        li.classList.add("limpa-lista")
        ul.appendChild(li);
    });
}