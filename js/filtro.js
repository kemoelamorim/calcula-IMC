var inputFiltro = document.querySelector("#filtroNome")


inputFiltro.addEventListener('input', ()=>{
    var pacientes = document.querySelectorAll(".paciente")
    pacientes.forEach(paciente => {
        if(inputFiltro.value.length > 0){
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent;
            var expressao = new RegExp(inputFiltro.value, "i")
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")
            }
        }else{  
            paciente.classList.remove("invisivel")  
        }
    });
})