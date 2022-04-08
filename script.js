let numeroCartas
let tempoJogo
let idContador
let permissao=true
let jogadas
let carta1
let carta2

//Função responsavel por cronometra o temo de jogo
function cronometro(){
    document.querySelector(".cronometro").innerHTML=tempoJogo
    tempoJogo++
    console.log(tempoJogo)
}

//Função responsaver por definir o número de cartas do jogo
function selecionaNumCartas(){
    let numEscolhido=Number(prompt("Deseja jogar com quantas cartas?\n(4, 6, 8, 10, 12 ou 14)"))
    while(numEscolhido>14 || numEscolhido<4 || numEscolhido%2!==0){
        numEscolhido=Number(prompt("Digite um dos números a seguir:\n(4, 6, 8, 10, 12 ou 14)"))
    }
    return numEscolhido
}

//Função responsavel por embaralhar as cartas
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

//Função respnsavel por comparar os pares de cartas 
function comparaCartas(){
    const GifCarta1=carta1.querySelector(".face.verso img")
    const GifCarta2=carta2.querySelector(".face.verso img")
    if(GifCarta1.getAttribute("src")!==GifCarta2.getAttribute("src")){
        carta1.classList.remove("flip")
        carta2.classList.remove("flip")
    }
    permissao=true
    if (document.querySelectorAll(".flip").length===numeroCartas){
        finalizaJogo()
        
    }
}

//Função responsavel pela flipar as cartas e fazer a contagem das jogadas
function flipar(elemento){
    if(document.querySelectorAll(".flip").length%2===0 && permissao){
        carta1=elemento
        elemento.classList.add("flip")
        jogadas++
    }
    else if(document.querySelectorAll(".flip").length%2!==0 && permissao){
        carta2=elemento
        elemento.classList.add("flip")
        setTimeout(comparaCartas,1000)
        permissao=false
        jogadas++
    }
}

//Função responsavel por iniciar o jogo
function inicio(){
    jogadas=0
    numeroCartas=selecionaNumCartas()
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
    tempoJogo=0
    idContador=setInterval(cronometro,1000)
}

//Função responsavel pelas ações pos jogo
function finalizaJogo(){
    clearInterval(idContador)
    alert(`Você ganhou em ${jogadas} jogadas e ${tempoJogo} segundos de jogo!!\n`)
    let jogarNovamente=prompt("Deseja reiniciar o jogo?\n(sim ou não)")
    while (jogarNovamente!=="sim" && jogarNovamente!=="não"){
        jogarNovamente=prompt("Deseja reiniciar o jogo? Digite:\n(sim ou não)")
    }
    if (jogarNovamente==="sim"){
        document.querySelector(".conteiner-cartas").innerHTML=""
        inicio()
    }
            
}


inicio()