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

caja.push( new Billete(100, 5));
caja.push( new Billete(50, 10));
caja.push( new Billete(20, 5));
caja.push( new Billete(10, 10));
caja.push( new Billete(5, 5));

var dinero = 0;
var div = 0;
var papeles = 0;
 //Obtengo un elemento de html atraves del id. En este caso obtengo la cantidad de dinero que el usuario pide
var b = document.getElementById("extraer");
//Disparo la función entregarDinero con el evento click
b.addEventListener("click", entregarDinero);
//es el elemento del documento llamado resultado
var resultado = document.getElementById("resultado");

//Algoritmo 
function entregarDinero()
{
    //Obtengo dinero desde la caja de texto a traves de su id
    var t = document.getElementById("dinero");
    //Dinero es igual al valor de la caja de texto
    //Casteo la variable t de tipo string a int
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            //Función para redondear números decimales hacía abajo
          div = Math.floor(dinero / bi.valor);
          
          if(div > bi.cantidad)
          {
              //Si el valor de la division es mayor que la cantidad de los billetes
              //entonces es igual a la cantidad de billetes disponibles
              // y no puedo darte más.
              papeles = bi.cantidad;
          }
          else
          {
              //Si el valor de la división es menor
              //entonces si tengo billetes.
              papeles = div;
          }
          //Muestro cuantos billetes tengo que entregar
          entregado.push(new Billete(bi.valor, papeles));
          //resto al dinero actual, el dinero que ya entregue
          dinero = dinero - (bi.valor * papeles)
        }

    }

    if(dinero > 0)
    {
        resultado.innerHTML = "No tengo tanto dinero";
    }
    else
    {
        //recorro el array entregado y muestro en pantalla/ e es una instancia de la clase billete
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                //innerHTML es el atributo del objeto resultado
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
            }
        }
    }

    
}


