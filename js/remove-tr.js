var pacientes = document.querySelector("#tabela-pacientes")
pacientes.addEventListener('dblclick', (event)=>{
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove()
    }, 500)
})