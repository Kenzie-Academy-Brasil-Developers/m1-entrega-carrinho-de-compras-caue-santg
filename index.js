//referenciando pai dinamico
const CorpoPagina = document.querySelector("main")
const produtoLista = document.querySelector("ul")
const rodape = document.querySelector("section")

function criaCarrinho(){
    
    const tagHeader = document.createElement("header")
    const tagH1 = document.createElement("h1")
    const tagDiv = document.createElement("div")
    const tagH2 = document.createElement("h2")
    const tagH3 = document.createElement("h3")

    tagH1.classList.add("titulo")
    tagH1.innerText = "Virtual Market"
    tagDiv.classList.add("cabecalho")
    tagH2.innerText = "Item"
    tagH3.innerText = "Valor"
   
    CorpoPagina.appendChild(tagHeader)
    tagHeader.appendChild(tagH1)
    tagHeader.appendChild(tagDiv)
    tagDiv.appendChild(tagH2)
    tagDiv.appendChild(tagH3)
 
    return tagHeader
}
criaCarrinho()

//Criando produto
function criaLista (produto){

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

//Percorrendo produtos no array
function listarProduto(prod){

    for (let i = 0; i < prod.length; i++){
        const produto = prod[i]
        
        const lista = criaLista(produto)
        
        produtoLista.appendChild(lista)
    

    }

}//chamando funcao listarProduto
listarProduto(productsCart)

function finalizarCompra (){

    
    const tagDiv2 = document.createElement("div")
    const tagP1 = document.createElement("p")
    const tagBtn = document.createElement("button")

    tagDiv2.classList.add("divSoma")
    tagP1.innerText = "Total:"
    tagBtn.classList.add("btnComprar")
    tagBtn.innerText = "Finalizar Compra"
    
    rodape.appendChild(tagDiv2)
    tagDiv2.appendChild(tagP1)
    rodape.appendChild(tagBtn)
    
    return tagDiv2
}
finalizarCompra()

const totalcompra = document.querySelector(".divSoma")

function somarProdutos(prod){
    let total = 0
    for (let i = 0; i < prod.length; i++){
        
        total += prod[i].price
        
    }
    const tagP2 = document.createElement("p")
    tagP2.innerText = total
    rodape.appendChild(totalcompra)
    totalcompra.appendChild(tagP2)

}

somarProdutos(productsCart)
















