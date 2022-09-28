function insereItem(event){
    event.preventDefault()

    const input = document.getElementById("meu-input")
    const lista = document.getElementById("lista")

    const itemLista = document.createElement("li")
    const itemTexto = document.createTextNode(input.value)
    itemLista.appendChild(itemTexto) 

    lista.insertAdjacentElement("beforeend", itemLista)
    input.value = ""
}

/* function insereItem(event) {
    event.preventDefault()

    const input = document.getElementById("meu-input")
    const lista = document.getElementById("lista")

    const itemLista = document.createElement("li")
    const itemTexto = document.createTextNode(input.value)
    itemLista.appendChild(itemTexto)
    // <li>Batata</li>

    lista.insertAdjacentElement('beforeend', itemLista)
    input.value = ""
} */