const numeroCartas=selecionaNumCartas()
let permissao=true
let jogadas=0
let carta1
let carta2

function selecionaNumCartas(){
    let numEscolhido=Number(prompt("Deseja jogar com quantas cartas?\n(4, 6, 8, 10, 12 ou 14)"))
    while(numEscolhido>14 || numEscolhido<4 || numEscolhido%2!==0){
        numEscolhido=Number(prompt("Digite um dos números a seguir:\n(4, 6, 8, 10, 12 ou 14)"))
    }
    return numEscolhido
}

function embaralha(lista) {
    let gifSorteado;
    let indiceSorteado;
    let listaEmbaralhada = [];
    while (lista.length > 0) {
      indiceSorteado = parseInt(Math.random() * lista.length);
      gifSorteado = lista[indiceSorteado];
      listaEmbaralhada.push(gifSorteado);
      lista.splice(indiceSorteado, 1);
    }
    return listaEmbaralhada;
  }

function comparaCartas(){
    const GifCarta1=carta1.querySelector(".face.verso img")
    const GifCarta2=carta2.querySelector(".face.verso img")
    if(GifCarta1.getAttribute("src")!==GifCarta2.getAttribute("src")){
        carta1.classList.remove("flip")
        carta2.classList.remove("flip")
    }
    permissao=true
    if (document.querySelectorAll(".flip").length===numeroCartas){
        alert(`Parabéns você acertou todos os pares de cartas em ${jogadas} jogadas!!\n`)
    }
}

function flipar(elemento){
    if(document.querySelectorAll(".flip").length%2===0 && permissao){
        carta1=elemento
        elemento.classList.add("flip")
    }
    else if(document.querySelectorAll(".flip").length%2!==0 && permissao){
        carta2=elemento
        elemento.classList.add("flip")
        setTimeout(comparaCartas,1000)
        permissao=false
        jogadas++
    }
}

function inicio(){
    let listaGifs=["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]
    listaGifs=embaralha(listaGifs)
    let gifsSorteados= listaGifs.splice(0,numeroCartas/2)
    let listaSorteados= gifsSorteados.concat(gifsSorteados)
    listaSorteados=embaralha(listaSorteados)
    for(i=0; i<numeroCartas; i++){
        document.querySelector(".conteiner-cartas").innerHTML+=`
        <div class="carta" onclick="flipar(this)">
            <div class="face frente">
                <img src="./imagens/front.png">
            </div>
            <div class="face verso">
                <img src="./gifs/${listaSorteados[i]}"> 
            </div>
        </div>`
    }
}

inicio()