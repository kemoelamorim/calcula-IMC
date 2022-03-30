var titulo = document.querySelector('.adicionar')
console.log(titulo);
var pacientes = document.querySelectorAll('.paciente')

pacientes.forEach(paciente => {
  var tdNome = paciente.querySelector('.info-nome')
  var nome = tdNome.textContent;
  
  var tdPeso = paciente.querySelector('.info-peso')
  var peso = tdPeso.textContent;
  
  var tdAltura = paciente.querySelector('.info-altura')
  var altura = tdAltura.textContent;
  
  var tdImc = paciente.querySelector('.info-imc');
  
  var pesoEhValido = true;
  var alturaEhValida = true;
  
  if(peso <= 0 || peso >= 1000){
    pesoEhValido = false;
    tdImc.textContent = 'Peso inválido'
    paciente.classList.add('paciente-invalido');
    
  }
  if(altura <= 0 || altura >= 3){
    tdImc.textContent = 'Altura inválida';
    alturaEhValida = false;
    paciente.classList.add('paciente-invalido');
  }
  
  if(pesoEhValido && alturaEhValida){
    var imc = peso / (altura * altura)
    tdImc.textContent =  imc.toFixed(2)
  }
  
  
  console.log(peso)
  console.log(altura) 
  console.log(imc)

});  

titulo.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Chamando uma arown function');
})