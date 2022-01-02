function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(color (0,128,0));
  desenhoDoGol()
  exibicaoDaBola ();
  movimentoDaBola ();
  colisaoDaBola ();
  colisaoComOGol();
  incluirPlacar ();
  marcadorDePontos ();
  raqueteTime1 ();
  raqueteTime2 ();
  movimentoDaRaquete1 ();
  movimentoDaRaquete2 ();
  colisaoComARaquete1 ();
  colisaoComARaquete2 ();
  marcacaoDoCampoExterna();
  marcacaoGrandeArea ();
  meioDeCampo ();
  
}
// sons do jogo
let raquetada;
let ponto;
let trilha;

function preload (){
  trilha = loadSound ("trilha.mp3")
  ponto = loadSound ("ponto.mp3")
  raquetada = loadSound ("raquetada.mp3")
  
}
