const container_principal = document.querySelector("#container-principal")
const form = document.querySelector("#form")
const input_tarefa = document.querySelector("#input-tarefa")
const add_tarefa_button = document.querySelector("#add-button")
const lista_tarefas = document.querySelector("#lista-tarefas")
const edit_form_container = document.querySelector("#edit-form-container")
const confirm_edit_button = document.querySelector("#confirm-edit-button")
const cancel_edit = document.querySelector("#cancel-edit")
const edit_form = document.querySelector("#edit-form")
const edit_input = document.querySelector("#edit-input")

var tarefa_editada = null

// Funções
function toggleHide() {
    container_principal.classList.toggle("hide")
    edit_form_container.classList.toggle("hide")
}

function adicionarItemTela(elemento) {
    const firstChild = lista_tarefas.firstChild
    lista_tarefas.insertBefore(elemento, firstChild)
}

function criarNovoItem(text) {
    let container_tarefa = document.createElement("div")
    container_tarefa.classList.add("tarefa")

    let tarefa = document.createElement("h3")
    tarefa.innerText = text
    container_tarefa.appendChild(tarefa)

    let container_buttons = document.createElement("div")
    container_buttons.classList.add("container-buttons")

    let edit_button = document.createElement("button")
    edit_button.classList.add("edit-button")
    edit_button.innerHTML = '<span class="material-symbols-outlined">edit</span>'
    container_buttons.appendChild(edit_button)

    let complete_button = document.createElement("button")
    complete_button.classList.add("complete-button")
    complete_button.innerHTML = '<span class="material-symbols-outlined">done</span>'
    container_buttons.appendChild(complete_button)

    let delete_button = document.createElement("button")
    delete_button.classList.add("delete-button")
    delete_button.innerHTML = '<span class="material-symbols-outlined">delete</span>'
    container_buttons.appendChild(delete_button)
    
    container_tarefa.appendChild(container_buttons)

    return container_tarefa
}

// Eventos
form.addEventListener("submit", (event) => {

    event.preventDefault()

    let descricao_tarefa = input_tarefa.value

    if (descricao_tarefa && descricao_tarefa.trim()) {

        estrutura_nova_tarefa = criarNovoItem(descricao_tarefa)
        adicionarItemTela(estrutura_nova_tarefa)

        input_tarefa.value = ""
        input_tarefa.focus()
    }
})

document.addEventListener("click", (event) => {
    let elemento = event.target
    let tarefa = elemento.closest(".tarefa")

    if (elemento.classList.contains("complete-button")) {
        tarefa.classList.toggle("completed")
    }
    else if (elemento.classList.contains("delete-button")) {
        tarefa.remove()
    }
    else if (elemento.classList.contains("edit-button")) {
        toggleHide()
        tarefa_editada = tarefa.querySelector("h3")
        edit_input.value = tarefa_editada.textContent
    }
})

edit_form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    nova_descricao = edit_input.value

    if (nova_descricao && nova_descricao.trim()) {
        tarefa_editada.innerText = nova_descricao
        toggleHide()
    }
    edit_input.value = ""
    edit_input.focus()
})

cancel_edit.addEventListener("click", (event) => {
    event.preventDefault()
    toggleHide()
})