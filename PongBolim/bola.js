// variáveis da bola
let xBola = 300;
let yBola= 200;
let diametroDaBola= 15;
let velocidadeXDaBola= 6;
let velocidadeYDaBola= 6;
let raioDaBola = diametroDaBola / 2;

// exibição da bola 
function exibicaoDaBola (){
  fill (255)
  circle (xBola, yBola, diametroDaBola);
 
}
// movimento da bola
 function movimentoDaBola () {
   // movimento da bola
xBola += velocidadeXDaBola;
yBola += velocidadeYDaBola;
 }
// controle da colisão da bola
function colisaoDaBola (){
if (xBola + raioDaBola >width || xBola - raioDaBola< 0){
  velocidadeXDaBola *= -1;
}
if (yBola + raioDaBola > height || yBola - raioDaBola < 0){
  velocidadeYDaBola *= -1;
}
}
  