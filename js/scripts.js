//Variaveis globais do jogo
var jogador = totalJogadas = 0;
var tabuleiro = [0,1,2,3,4,5,6,7,8,9];
var ganhou;

//Função para efetuar uma jogada
function jogar(pos){
    totalJogadas++;
    var res = verificarGanhador();
    if (res == false) {
        var valor = document.getElementById('i'+pos);
        if (tabuleiro[pos-1]!= "O" && tabuleiro[pos-1] != "X") {
            if (jogador == 0) {
                tabuleiro[pos-1] = "O";
                var xo = "img/circuloazulpequeno.png";
                jogador = 1;
            } else {
                tabuleiro[pos-1] = "X";
                var xo = "img/delete.png";
                jogador = 0;
            }
            document.getElementById("im"+pos).src = xo;
            ultimojogador.src = xo;
            ultimojogador.style = "width:40px; height:40px;";
            posicao.innerHTML = "Posição: <br/>"+pos;

            verificarGanhador();
            resultado(xo);
        }
        tocarSom('audio/jogada.wav');
    }
}

//Função para verificar se há um vencedor
function verificarGanhador(){
    if ((tabuleiro[0]==tabuleiro[1] &&tabuleiro[0]==tabuleiro[2]) ||
        (tabuleiro[3]==tabuleiro[4] &&tabuleiro[3]==tabuleiro[5]) ||
        (tabuleiro[6]==tabuleiro[7] &&tabuleiro[6]==tabuleiro[8]) 
     ) {
        ganhou = true;
        pintarQuadros("linha");
    } else {
        if ((tabuleiro[0]==tabuleiro[3] &&tabuleiro[0]==tabuleiro[6]) ||
            (tabuleiro[1]==tabuleiro[4]  &&tabuleiro[1]==tabuleiro[7]) ||
            (tabuleiro[2]==tabuleiro[5]  &&tabuleiro[2]==tabuleiro[8]) 
        ) {
            ganhou = true;
            pintarQuadros("coluna");
        } else {
            if ((tabuleiro[0]==tabuleiro[4] &&tabuleiro[0]==tabuleiro[8]) ||
                (tabuleiro[2]==tabuleiro[4] &&tabuleiro[2]==tabuleiro[6]) 
            ) {
                ganhou = true;
                pintarQuadros("diagonal");
            } else {
                ganhou = false;
            }
        }
    }
    return ganhou;
}

//Função para exibir dados do jogador que venceu ou se deu empate
function resultado(imagem){
    if (ganhou==true) {
        ganhador.innerHTML="Vencedor:";
        imgGanhou.src = imagem;
        imgGanhou.style = "width:40px; height:40px;";
        tocarSom('audio/venceu.wav'); 
    } else {
        //Verificando se empatou
        if (totalJogadas==9) {
            ganhador.innerHTML="EMPATE";
            tocarSom('audio/venceu.wav')
        }
    }
}

//Função para pintar os quadros do vencedor
function pintarQuadros(quadros){
    var cor = "#730099"
    var pos = document.getElementById("posicao");
   //btIniciar.innerHTML = pos;
    if (quadros == "linha") {
        if (tabuleiro[0]==tabuleiro[1] && tabuleiro[0]==tabuleiro[2]) {
            i1.style.backgroundColor = cor;
            i2.style.backgroundColor = cor;
            i3.style.backgroundColor = cor;
        } else {
            if (tabuleiro[3]==tabuleiro[4] && tabuleiro[3]==tabuleiro[5]) {
            i4.style.backgroundColor = cor;
            i5.style.backgroundColor = cor;
            i6.style.backgroundColor = cor;
            } else {
                i7.style.backgroundColor = cor;
                i8.style.backgroundColor = cor;
                i9.style.backgroundColor = cor;
            }
        }
    } else {
        if (quadros == "coluna") {
            if (tabuleiro[0]==tabuleiro[3] && tabuleiro[0] == tabuleiro[6]) {
                i1.style.backgroundColor = cor;
                i4.style.backgroundColor = cor;
                i7.style.backgroundColor = cor;
            } else {
                if (tabuleiro[1] ==tabuleiro[4] && tabuleiro[1] == tabuleiro[7]) {
                    i2.style.backgroundColor = cor;
                    i5.style.backgroundColor = cor;
                    i8.style.backgroundColor = cor;
                } else {    
                    i3.style.backgroundColor = cor;
                    i6.style.backgroundColor = cor;
                    i9.style.backgroundColor = cor;
                
                }
            }
        } else {
            if (quadros == "diagonal") {
                if (tabuleiro[0] == tabuleiro[4] && tabuleiro[0] == tabuleiro[8]) {
                    i1.style.backgroundColor = cor;
                    i5.style.backgroundColor = cor;
                    i9.style.backgroundColor = cor;
                } else {
                    if (tabuleiro[2] == tabuleiro[4] && tabuleiro[2] == tabuleiro[6]) {
                         i3.style.backgroundColor = cor;
                         i5.style.backgroundColor = cor;
                         i7.style.backgroundColor = cor;
                    } 
                        
                    }
                }
            }

            
        }
    }



//Função para inicializar/reiniciar o jogo
function iniciarJogo(){
    for(var pos=1; pos<=9; pos++){
        tabuleiro[pos-1] = pos-1;
        document.getElementById("im" +pos).src = "";
        document.getElementById("i"+pos).style.backgroundColor = "rgba(255,255,255,0.5)";
        }
    jogador = totalJogadas = 0;
    ganhou = null;
    ultimojogador.src = "";
    ultimojogador.style = "";
    posicao.innerHTML = "";
    ganhador.innerHTML = "";
    imgGanhou.style = "";
    imgGanhou.src = "";
    tocarSom('audio/iniciar.wav'); 
    

}

//Função para tocar um som
function tocarSom(som){
    var audio = new Audio(som);
    audio.addEventListener('canplaythrough' , function(){
        audio.play()
    });
        

}



