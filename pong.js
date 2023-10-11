// Cria o canvas
var canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
// Cria o contexto do canvas
var ctx = canvas.getContext("2d");
// Cria as raquetes
var raquete1 = {
  x: 10,
  y: 100,
  width: 10,
  height: 100
};
var raquete2 = {
  x: 780,
  y: 100,
  width: 10,
  height: 100
};
// Cria a bola
var bola = {
  x: 400,
  y: 300,
  radius: 10,
  vx: 5,
  vy: 5
};
// Cria as pontuações
var pontuacao1 = 0;
var pontuacao2 = 0;
// Cria a função de atualização
function update() {
  // Atualiza a posição das raquetes
  if (keys[38]) {
    raquete1.y -= 5;
  }
  if (keys[40]) {
    raquete1.y += 5;
  }
  if (keys[87]) {
    raquete2.y -= 5;
  }
  if (keys[83]) {
    raquete2.y += 5;
  }
  // Atualiza a posição da bola
  bola.x += bola.vx;
  bola.y += bola.vy;
  // Verifica se a bola colidiu com as paredes
  if (bola.x < 0 || bola.x > 800) {
    bola.vx *= -1;
  }
  if (bola.y < 0 || bola.y > 600) {
    bola.vy *= -1;
  }
  // Verifica se a bola colidiu com as raquetes
  if (bola.x < raquete1.x + raquete1.width && bola.y > raquete1.y && bola.y < raquete
