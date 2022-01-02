// variaveis 
let xGol = [0, 595];
let yGol = [150, 150];
let alturaGol = [90, 90];
let comprimentoGol = [2, 2];

//area do gol

function desenhoDoGol() {
  fill (255)
  for (let i = 0; i < xGol.length; i+= 1) {
    rect(xGol[i], yGol[i], comprimentoGol[i], alturaGol[i]);
  }
  
}