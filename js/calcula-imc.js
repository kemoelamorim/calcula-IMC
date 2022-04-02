var pacientes = document.querySelectorAll('.paciente')

pacientes.forEach(paciente => {
  var tdNome = paciente.querySelector('.info-nome')
  var nome = tdNome.textContent;
  
  var tdPeso = paciente.querySelector('.info-peso')
  var peso = tdPeso.textContent;
  
  var tdAltura = paciente.querySelector('.info-altura')
  var altura = tdAltura.textContent;
  
  var tdImc = paciente.querySelector('.info-imc');
  
  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);
  
  if(!pesoEhValido){
    pesoEhValido = false;
    tdImc.textContent = 'Peso inválido'
    paciente.classList.add('paciente-invalido');
    
  }
  if(!alturaEhValida){
    tdImc.textContent = 'Altura inválida';
    alturaEhValida = false;
    paciente.classList.add('paciente-invalido');
  }
  
  if(pesoEhValido && alturaEhValida){
    var imc = calculaImc(peso, altura);
    tdImc.textContent =  imc;
  }

});

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / altura;
  return imc.toFixed(2);
}

function validaPeso(peso){
  if(peso >= 0 && peso < 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura > 0 && altura < 3){
    return true;
  }else{
    return false;
  }
}