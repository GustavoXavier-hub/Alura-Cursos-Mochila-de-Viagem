const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = []

itens.forEach( (elemento) => {
    criaElemento(elemento)
} )

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

     criaElemento(nome.value,quantidade.value)

      .value =""
      .value =""
})


function criaElemento(item) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)
    
    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)

    const itemAtual = {
        "nome": nome,
        "quantidade":quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem("item", JSON.stringify(itens))
    
}

