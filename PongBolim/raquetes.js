// variáveis da raquete do jogador 1
let xDaRaquete1 = [150, 350,]
let yDaRaquete1 = [100, 100,]
let comprimentoDaRaquete = 5;
let alturaDaRaquete = 80;



 // exibição das raquetes

 function raqueteTime1 (){
   
   
   for (let i = 0; i < xDaRaquete1.length; i+= 1) {
     fill (color(0,0,205))
  rect (xDaRaquete1 [i] , yDaRaquete1 [i] ,comprimentoDaRaquete, alturaDaRaquete);
     }
       
   }

// variáveis da raquete do jogador 2
let xDaRaquete2 = [ 250, 450]
let yDaRaquete2 = [ 200, 200]

 // exibição das raquetes

 function raqueteTime2 (){
   
   
   for (let i = 0; i < xDaRaquete2.length; i+= 1) {
     fill ( color (255,20,147))
  rect (xDaRaquete2 [i] , yDaRaquete2 [i] ,comprimentoDaRaquete, alturaDaRaquete);
     }
       
   }


// movimentação da raquete dos jogadores

function movimentoDaRaquete1 (){
  
  for (let i = 0; i < xDaRaquete1.length; i+= 1){
  
  if (keyIsDown(UP_ARROW)){
yDaRaquete1[i] -= 20;
    
  }
  if (keyIsDown(DOWN_ARROW)){
yDaRaquete1[i] += 20;  
  }
  }
}

function movimentoDaRaquete2 (){
  
  for (let i = 0; i < xDaRaquete2.length; i+= 1){
  
  if (keyIsDown(87)){
yDaRaquete2[i] -= 20;
    
  }
  if (keyIsDown(83)){
yDaRaquete2[i] += 20;  
  }
  }
}


// colisão da bola com as raquetes

function colisaoComARaquete1 (){
  for (let i = 0; i < xDaRaquete1.length; i+= 1){
 colisao =  collideRectCircle(xDaRaquete1[i], yDaRaquete1[i], comprimentoDaRaquete, alturaDaRaquete, xBola, yBola, raioDaBola);
  if (colisao){
  velocidadeXDaBola *= -1;
    raquetada.play();
  }
  }
    
}

function colisaoComARaquete2 (){
  for (let i = 0; i < xDaRaquete2.length; i+= 1){
 colisao =  collideRectCircle(xDaRaquete2[i], yDaRaquete2[i], comprimentoDaRaquete, alturaDaRaquete, xBola, yBola, raioDaBola);
  if (colisao){
  velocidadeXDaBola *= -1;
    raquetada.play();
  }
  }
    
}
    
