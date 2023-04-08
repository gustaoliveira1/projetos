const tarefaInput = document.querySelector("#input-tarefa")
const tarefaBtnAdd = document.querySelector("#add-button")
const tarefaAddForm = document.querySelector("#form")
const listaTarefas = document.querySelector("#lista-tarefas")
const delBtn = document.querySelectorAll(".delete-button")
const containerForm = document.querySelector("#container-principal")
const containerEditForm = document.querySelector("#edit-form-container")
const confirmEditBtn = document.querySelector("#edit-form-container")
const cancelEdit = document.querySelector("#cancel-edit")
const editInput = document.querySelector("#edit-input")

let tarefas = []

const adicionarTarefa = () => {
    const conteudoTarefa = tarefaInput.value
    if (conteudoTarefa && conteudoTarefa.trim()) {
        const novaTarefa = {
            conteudo: conteudoTarefa,
            isComplete: false
        }
        tarefas.push(novaTarefa)
    }
    tarefaInput.value = ""; tarefaInput.focus()
}

const renderizarTarefas = () => {
    listaTarefas.innerHTML = ""
    for (const tarefa of tarefas) {
        const elementoRenderizado = criarNovoItemParaRender(tarefa.conteudo)
        if (tarefa.isComplete) {
            elementoRenderizado.classList.add("completed")
        }
        listaTarefas.appendChild(elementoRenderizado)
    }
}

const criarNovoItemParaRender = (conteudoTarefa) => {
    let containerTarefa = document.createElement("div")
    containerTarefa.classList.add("tarefa")

    let descricaoTarefa = document.createElement("h3")
    descricaoTarefa.innerText = conteudoTarefa
    containerTarefa.appendChild(descricaoTarefa)

    let containerBtns = document.createElement("div")
    containerBtns.classList.add("container-buttons")

    let editBtn = document.createElement("button")
    editBtn.classList.add("edit-button")
    editBtn.innerHTML = '<span class="material-symbols-outlined">edit</span>'
    containerBtns.appendChild(editBtn)

    let completeBtn = document.createElement("button")
    completeBtn.classList.add("complete-button")
    completeBtn.innerHTML = '<span class="material-symbols-outlined">done</span>'
    completeBtn.addEventListener("click", () => concluirTarefa(containerTarefa))
    containerBtns.appendChild(completeBtn)

    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-button")
    deleteBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>'
    deleteBtn.addEventListener("click", () => apagarTarefa(containerTarefa))
    containerBtns.appendChild(deleteBtn)

    containerTarefa.appendChild(containerBtns)

    return containerTarefa
}

const apagarTarefa = (tarefaAlvo) => {
    const conteudoTarefa = pegarConteudoTarefa(tarefaAlvo)

    for (const index in tarefas) {
        const descricaoTarefaLista = tarefas[index].conteudo
        if (conteudoTarefa == descricaoTarefaLista) {
            tarefas.splice(index, 1)
            tarefaAlvo.remove()
        }
    }
}

const concluirTarefa = (tarefaAlvo) => {
    tarefaAlvo.classList.toggle("completed")

    const descricaoTarefa = pegarConteudoTarefa(tarefaAlvo)

    for (const index in tarefas) {
        const descricaoTarefaLista = tarefas[index].conteudo
        if (descricaoTarefa == descricaoTarefaLista) {
            tarefas[index].isComplete = true
        }
    }
}

const pegarConteudoTarefa = (tarefaAlvo) => tarefaAlvo.querySelector("h3").innerText

tarefaAddForm.addEventListener("submit", event => {
    event.preventDefault()
    adicionarTarefa()
    renderizarTarefas()
})