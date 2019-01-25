class Billete
{
    constructor(v, c)
    {
    this.valor = v;
    this.cantidad = c;
    }
}

var caja = [];
var entregado = [];

caja.push( new Billete(50, 10));
caja.push( new Billete(20, 30));
caja.push( new Billete(10, 10));

var dinero = 1000;
var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero()
{
    for(var bi of caja)
    {
        if(dinero > 0)
        {
          div = Math.floor(dinero / bi.valor);

          if(div > bi.cantidad)
          {
              papeles = bi.cantidad;
          }
          else
          {
              papeles = div;
          }

          entregado.push(new Billete(bi.valor, papeles));
          dinero = dinero - (bi.valor * papeles)
        }

    }

    if(dinero > 0)
    {
        console.log("No tengo tanto dinero");
    }

    console.log(entregado);
}


