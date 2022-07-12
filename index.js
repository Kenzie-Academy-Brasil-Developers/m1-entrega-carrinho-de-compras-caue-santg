const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho coração",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    }
    
]

//Percorrendo produtos
const listaCarrinho = document.querySelector("ul")

function listarProduto(listaProduto){

    for (let i = 0; i < listaProduto.length; i++){
        const produto = listaProduto[i]
        
        const lista = criarListaProdutos(produto)
        
        listaCarrinho.appendChild(lista)
    }

}
listarProduto(productsCart)


//Criando Lista
function criarListaProdutos (produto){

//referenciar obj
    const nome = produto.name
    const preco = produto.price
    const id =  produto.id

//criar elemento
    const tagLi     = document.createElement("li")
    const tagNome   = document.createElement("p")
    const tagPreco  = document.createElement("p")

//dar atributos
    tagLi.classList.add("listaProduto")
    tagNome.innerText  = nome
    tagLi.id           = id
    tagPreco.innerText =  `R$ ${preco}`
    
//dar pai elemento
    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagPreco)

//retorna li pronto
    return tagLi
}

