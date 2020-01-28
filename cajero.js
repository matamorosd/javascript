class Billete {
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}
var nuevacantidad;

var imagenes = [];
imagenes["500"] = "500.png";
imagenes["100"] = "100.png";
imagenes["50"] = "50.png";
imagenes["20"] = "20.png";
imagenes["10"] = "10.png";
imagenes["5"] = "5.png";
imagenes["1"] = "1.png";

var caja = [];

var entregado = [];
caja.push(new Billete(500,10));
caja.push(new Billete(100,10));
caja.push(new Billete(50,10));
caja.push(new Billete(20,5));
caja.push(new Billete(10,10));
caja.push(new Billete(5,10));
caja.push(new Billete(1,10));
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var resultadoBilletes = document.getElementById("resultadoBilletes");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);


function entregarDinero()
{
  resultado.innerHTML = "";
  resultadoBilletes.innerHTML = "";
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  for (var bi of caja) {
    if (dinero > 0)
    {
      div = Math.floor(dinero/bi.valor);
      if (div >= bi.cantidad) {
        papeles = bi.cantidad;
      }
      else {
        papeles = div;
      }
      bi.cantidad -= papeles;
      entregado.push(new Billete(bi.valor, papeles));
      dinero -= (bi.valor * papeles);
    }
  }

  if (dinero > 0) {
    resultado.innerHTML = "SALDO INSUFICIENTE! Soy un cajero pobre y malo!<br />";
  }
  else
  {
    for (var e of entregado)
    {
      if (e.cantidad > 0) {
          resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
          for (var i = 0; i < e.cantidad; i++) {
            resultadoBilletes.innerHTML += "<img src='" + e.imagen.src + "'></img><br />";
          }
      }
      e.cantidad = "";
      e.valor = "";
    }
  }
  //console.log(caja);
}
