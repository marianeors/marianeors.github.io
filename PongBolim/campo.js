//variáveis da marcação externa e pequena area 
let x1 = [10, 10, 10, 590,10, 50, 10, 550, 550, 550];
let x2 = [590, 10, 590, 590, 50, 50, 50, 590, 550, 590];
let y1 = [10, 10, 390, 10, 140, 140, 250, 140, 140, 250];
let y2= [10, 390, 390, 390, 140, 250, 250, 140, 250,250];



function marcacaoDoCampoExterna(){
  
 for (let i = 0; i < x1.length; i+= 1) {
    line(x1[i], y1[i], x2[i], y2[i]);
  }
}

//variaveis grande area e meio de campo 
let x11 = [10, 80, 10, 520, 520, 520, 300];
let x22 = [80, 80, 80, 590, 520, 590, 300];
let y11 = [110, 110, 280, 110, 110, 280, 10];
let y22 = [110, 280, 280, 110, 280, 280, 590];

function marcacaoGrandeArea () {

for (let i = 0; i < x11.length; i+= 1) {
    line(x11[i], y11[i], x22[i], y22[i]);
  }
}

function meioDeCampo () {
fill (255);  
circle (65, 200, 3);
circle (535, 200, 3);
circle (300, 200, 3);
noFill(300, 200, 150);
circle (300, 200, 150);
arc (10, 10, 50, 50, 0, HALF_PI);
arc (590, 10, 50, 50, HALF_PI, PI);
arc (590, 390, 50, 50, PI, PI + HALF_PI);
arc (10, 390, 50, 50, PI + HALF_PI, 0);

} 
