const form =document.querySelector('#form-tarefa')
const campoTarefa = document.querySelector('#tarefa')
const listaTarefa = document.querySelector('#listaTarefa')

form.addEventListener('submit', function (event){
    event.preventDefault();

    const texto = campoTarefa.value.trim();
    if (texto === ""){
        return
    }

    const item = document.createElement('li')
    item.textContent = texto
    listaTarefa.appendChild(item)
    campoTarefa.value= ""
    campoTarefa.focus()
})

if( 'serviceWorker' in navigator){
    navigator.serviceWorker.register("./sw.js")
        .then(registro =>  {
            console.log("Serviço Work registro com sucesso", registro)
        })
        .catch(erro =>{
            console.error("Erro ao regitrar Service Worker", erro)
        })
}