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

function inicio(){
    const numeroCartas=Number(prompt("Deseja jogar com quantas cartas?\n(4, 6, 8, 10, 12 ou 14)"))
    let listaGifs=["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]
    listaGifs=embaralha(listaGifs)
    let gifsSorteados= listaGifs.splice(0,numeroCartas/2)
    let listaSorteados= gifsSorteados.concat(gifsSorteados)
    listaSorteados=embaralha(listaSorteados)
    for(i=0; i<numeroCartas; i++){
        document.querySelector(".conteiner-cartas").innerHTML+=`
        <div class="carta" onclick="flipar(this)">
            <div class="face verso">
                <img src="./gifs/${listaSorteados[i]}"> 
            </div>
            <div class="face frente">
                <img src="./imagens/front.png">
            </div>
        </div>`
    }
}

inicio()