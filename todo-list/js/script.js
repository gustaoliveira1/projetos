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

const adicionarTarefaLista = () => {
    const descricaoTarefa = tarefaInput.value
    if (descricaoTarefa && descricaoTarefa.trim()) {
        const novaTarefa = { descricao: descricaoTarefa, completa: false }
        tarefas.push(novaTarefa)
        tarefaInput.value = ""
        tarefaInput.focus()
    }
}

const renderizarListaTarefas = () => {
    listaTarefas.innerHTML = ""
    for (const tarefa of tarefas) {
        const textoTarefa = tarefa.descricao
        const novoItem = criarNovoItemHTML(textoTarefa)
        listaTarefas.appendChild(novoItem)
    }
}

const criarNovoItemHTML = (conteudoTarefa) => {
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
    editBtn.addEventListener("click", () => toggleEditForm(containerTarefa))
    containerBtns.appendChild(editBtn)

    let completeBtn = document.createElement("button")
    completeBtn.classList.add("complete-button")
    completeBtn.innerHTML = '<span class="material-symbols-outlined">done</span>'
    completeBtn.addEventListener("click", () => marcarTarefaComoCompleta(containerTarefa))
    containerBtns.appendChild(completeBtn)

    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-button")
    deleteBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>'
    deleteBtn.addEventListener("click", () => deletarTarefa(containerTarefa))
    containerBtns.appendChild(deleteBtn)

    containerTarefa.appendChild(containerBtns)

    return containerTarefa
}

const atualizarLocalStorage = () => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

const onRefreshPage = () => {
    tarefasString = localStorage.getItem("tarefas")
    tarefas = JSON.parse(tarefasString)
    renderizarListaTarefas()
}

const deletarTarefa = (itemLista) => {
    for (const index in tarefas) {
        const tarefaAlvo = itemLista.querySelector("h3")
        const descricaoTarefaAlvo = tarefaAlvo.textContent
        if (descricaoTarefaAlvo == tarefas[index].descricao) {
            tarefas.splice(index, 1)
        }
    }
    atualizarLocalStorage()
    itemLista.remove()
}

const marcarTarefaComoCompleta = (itemLista) => {
    itemLista.classList.toggle("completed")
}

const toggleEditForm = () => {
    containerForm.classList.toggle("hide")
    containerEditForm.classList.toggle("hide")
}

onRefreshPage()

tarefaAddForm.addEventListener("submit", event => {
    event.preventDefault()
    adicionarTarefaLista()
    renderizarListaTarefas()
    atualizarLocalStorage()
})

cancelEdit.addEventListener("click", event => {
    event.preventDefault()
    toggleEditForm()
})