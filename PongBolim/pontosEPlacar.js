//variaveis
let colisao = false; 



function colisaoComOGol(){
   for (let i = 0; i < xGol.length; i+= 1) {
 colisao = collideRectCircle(xGol[i], yGol[i], comprimentoGol[i], alturaGol[i], xBola[i], yBola[i], raioDaBola[i]);
  if (colisao){
  velocidadeXDaBola *= -1;
  }
   }
}

// variáveis do placar
let pontosDoJogador1 = 0;
let pontosDoJogador2 = 0;

// exibição dos pontos
function incluirPlacar (){
  stroke(255)
  textAlign (CENTER);
  textSize (20);
  fill (color(255, 140, 0));
  rect (200, 10, 50, 20);
  rect (400, 10, 50, 20);
  fill (255);
  text (pontosDoJogador1, 225, 26);
  text (pontosDoJogador2, 425, 26);
}

function marcadorDePontos (){
  if (xBola > 590 && yBola > 149 && yBola < 241) {
  pontosDoJogador1+= 1;
    xBola= 300;
    yBola=200;
    ponto.play();
  }
  if (xBola < 10 && yBola > 149 && yBola < 241) {
  pontosDoJogador2 += 1;
    xBola= 300;
    yBola=200;
    ponto.play();
  }
}

