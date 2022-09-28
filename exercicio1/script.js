function adicionarItemZero(){
const lista = document.getElementById("lista")

const itemLista = document.createElement("li")
const itemTextoZero = document.createTextNode("Item 0")

itemLista.appendChild(itemTextoZero)
//<li>Item 0</li>

lista.insertAdjacentElement("afterbegin", itemLista)
}

adicionarItemZero()

function adicionarItemCinco(){
    const lista = document.getElementById("lista")
    
    const itemLista = document.createElement("li")
    const itemTextoCinco = document.createTextNode("Item Cinco")
    
    itemLista.appendChild(itemTextoCinco)
   
    lista.insertAdjacentElement("beforeend", itemLista)
    }
    
    adicionarItemCinco()
    
//outro jeito de fazer
   /*  function adicionarItem(texto, posicao){
        const lista = document.getElementById("lista");
        const itemLista = document.createElement("li");
        const itemTextoZero = document.createTextNode(texto);
        itemLista.appendChild(itemTextoZero);
        lista.insertAdjacentElement(posicao, itemLista);
        }
        
        adicionarItem("Item 0", "afterbegin")
        
        adicionarItem("Item 5", "beforeend") */