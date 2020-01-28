var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
var x = 0;
var y = 0;

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
cuadrito.addEventListener("mouseup", MouseArriba);
cuadrito.addEventListener("mousedown", MouseAbajo);
cuadrito.addEventListener("mousemove", dibujarMouse);
cuadrito.addEventListener("mouseleave", pararDibujo);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

var colorcito = "green";
var movimiento = 1;
var dibuje = 0;

function dibujarTeclado(evento)
{
  console.log(evento.keyCode);
  switch (evento.keyCode)
   {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento ;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
    default:
      console.log("Otra tecla");
    break;
  }
}

function pararDibujo();

function dibujarMouse(mouse)
{
  console.log(mouse);
  x = mouse.x;
  y = mouse.y;
  if (dibuje == 1) {
    dibujarLinea(colorcito, x-1, y-1, x+1, y+1, papel);
  }
}

function MouseArriba(mouse)
{
  dibuje = 0;
}

function MouseAbajo(mouse)
{
  dibuje = 1;
}
