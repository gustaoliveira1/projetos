const input_tarefa = document.querySelector("#input-tarefa")
const add_tarefa_button = document.querySelector("#add-button")
const lista_tarefas = document.querySelector("#lista-tarefas")

var tarefas = []
var id_nova_tarefa = 0

// Funções
function adicionarTarefa() {
    let tarefa = input_tarefa.value
    if (tarefa) {
        ++id_nova_tarefa
        let nova_tarefa = {
            id: id_nova_tarefa,
            descricao: tarefa,
            completa: false
        }
        tarefas.push(nova_tarefa)
        input_tarefa.value = ""
        input_tarefa.focus()
        let novo_item = criarNovoItem(nova_tarefa.descricao)
        adicionarItemTela(novo_item)
    }
}

function adicionarItemTela(elemento) {
    const firstChild = lista_tarefas.firstChild
    lista_tarefas.insertBefore(elemento, firstChild)
}

function criarNovoItem(text) {
    let container_tarefa = document.createElement("div")
    container_tarefa.classList.add("tarefa")
    container_tarefa.id = id_nova_tarefa

    let tarefa = document.createElement("h3")
    tarefa.innerText = text
    container_tarefa.appendChild(tarefa)

    let container_buttons = document.createElement("div")
    container_buttons.classList.add("container-buttons")

    let edit_button = document.createElement("button")
    edit_button.classList.add("edit-button")

    let complete_button = document.createElement("button")
    complete_button.classList.add("complete-button")

    let delete_button = document.createElement("button")
    delete_button.classList.add("delete-button")
    
    let edit_icon = document.createElement("span")
    edit_icon.classList.add("material-symbols-outlined")
    edit_icon.innerText = "edit"
    edit_button.appendChild(edit_icon)
    container_buttons.appendChild(edit_button)

    let complete_icon = document.createElement("span")
    complete_icon.classList.add("material-symbols-outlined")
    complete_icon.innerHTML = "done"
    complete_button.appendChild(complete_icon)
    container_buttons.appendChild(complete_button)
    
    let delete_icon = document.createElement("span")
    delete_icon.classList.add("material-symbols-outlined")
    delete_icon.innerHTML = "delete"
    delete_button.appendChild(delete_icon)
    container_buttons.appendChild(delete_button)

    container_tarefa.appendChild(container_buttons)

    return container_tarefa
}

// Eventos
add_tarefa_button.addEventListener("click", adicionarTarefa)