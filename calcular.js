var boton = document.getElementById("botonCalcular");
boton.addEventListener("click", calcularVuelto);
function calcularVuelto() {
  document.requery;
  // obtener datos del formulario CUP
  var iventaCup = Number(document.getElementById("IVENTACUP").value);
  var ipagoCup = Number(document.getElementById("IPAGOCUP").value);
  var ip1000Cup = Number(document.getElementById("P1000CUP").value);
  var ip500Cup = Number(document.getElementById("P500CUP").value);
  var ip200Cup = Number(document.getElementById("P200CUP").value);
  var ip100Cup = Number(document.getElementById("P100CUP").value);
  var ip50Cup = Number(document.getElementById("P50CUP").value);
  var ip20Cup = Number(document.getElementById("P20CUP").value);
  var ip10Cup = Number(document.getElementById("P10CUP").value);
  var ip5Cup = Number(document.getElementById("P5CUP").value);
  var ip3Cup = Number(document.getElementById("P3CUP").value);
  var ip1Cup = Number(document.getElementById("P1CUP").value);
  var ic40Cup = Number(document.getElementById("C40CUP").value);
  var ic20Cup = Number(document.getElementById("C20CUP").value);
  var ic5Cup = Number(document.getElementById("C5CUP").value);
  var ic1Cup = Number(document.getElementById("C1CUP").value);
  // obtener datos del formulario CUC
  var iventaCuc = Number(document.getElementById("IVENTACUC").value);
  var ipagoCuc = Number(document.getElementById("IPAGOCUC").value);
  var ip100Cuc = Number(document.getElementById("P100CUC").value);
  var ip50Cuc = Number(document.getElementById("P50CUC").value);
  var ip20Cuc = Number(document.getElementById("P20CUC").value);
  var ip10Cuc = Number(document.getElementById("P10CUC").value);
  var ip5Cuc = Number(document.getElementById("P5CUC").value);
  var ip3Cuc = Number(document.getElementById("P3CUC").value);
  var ip1Cuc = Number(document.getElementById("P1CUC").value);
  var ic50Cuc = Number(document.getElementById("C50CUC").value);
  var ic25Cuc = Number(document.getElementById("C25CUC").value);
  var ic10Cuc = Number(document.getElementById("C10CUC").value);
  var ic5Cuc = Number(document.getElementById("C5CUC").value);
  // Calculo del importe de pago CUP
  ipagoCup =
    ip1000Cup * 1000 +
    ip500Cup * 500 +
    ip200Cup * 200 +
    ip100Cup * 100 +
    ip50Cup * 50 +
    ip20Cup * 20 +
    ip10Cup * 10 +
    ip5Cup * 5 +
    ip3Cup * 3 +
    ip1Cup +
    ic40Cup * 0.4 +
    ic20Cup * 0.2 +
    ic5Cup * 0.05 +
    ic1Cup * 0.01;
  // Calculo del importe de pago CUP
  ipagoCuc =
    ip100Cuc * 100 +
    ip50Cuc * 50 +
    ip20Cuc * 20 +
    ip10Cuc * 10 +
    ip5Cuc * 5 +
    ip3Cuc * 3 +
    ip1Cuc +
    ic50Cuc * 0.5 +
    ic25Cuc * 0.25 +
    ic10Cuc * 0.1 +
    ic5Cuc * 0.05;
  iventaCup = iventaCuc * 25;
  ivueltoCup = ipagoCup + ipagoCuc * 25 - iventaCup; // calculo de vuelto CUP
  ivueltoCuc = ipagoCuc + ipagoCup / 25 - iventaCuc; // calculo de vuelto CUC
  // actualizar formulario
  if (ipagoCup >= 0) {
    document.getElementById("IVENTACUP").value = redondear(iventaCup, 2);
    document.getElementById("IPAGOCUP").value = redondear(ipagoCup, 2);
    document.getElementById("IPAGOCUC").value = redondear(ipagoCuc, 2);
  }
  if (ivueltoCup >= 0) {
    document.getElementById("IVUELTOCUP").value = redondear(ivueltoCup, 2);
    document.getElementById("IVUELTOCUC").value = redondear(ivueltoCuc, 2);
  } else {
    alert(
      "Le falta dinero                               " +
        redondear(ivueltoCup, 2) +
        " CUP                                    o   " +
        redondear(ivueltoCuc, 2) +
        " CUC"
    );
    //document.getElementById("textoIPCUP").value=0
  }
}
// funsión para redondar un número con una cantidad de decimales determinada
function redondear(x, l) {
  var decim = 1,
    valorx = 0;
  for (var cont = 0; cont < l; cont = cont + 1) decim = decim * 10;
  //pico el numero
  valorx = picar(x, decim);
  //redondeo
  if ((x * decim) % 1 > 0.5) {
    valorx = valorx + 1 / decim;
    x = valorx;
    //pico otra vez el numero
    valorx = picar(x.value, decim);
  }
  // le agrego el punto cuando es entero y lleva decimeles
  if (parseInt(valorx) === valorx) {
    if (l > 0.1) valorx = valorx + ".";
    valorx = valorx + "0";
  }
  // le agrego todos los cero que faltan
  decim = 1;
  for (var cont = 1; cont < l; cont = cont + 1) {
    decim = decim * 10;
    if (parseInt(valorx * decim) === picar(valorx * decim, decim))
      valorx = valorx + "0";
  }
  return valorx;
}
//funsion para picar los decimales sin redondear
function picar(x, decim) {
  valorpicado =
    parseInt(x) + (parseInt(x * decim) - parseInt(x) * decim) / decim;
  return valorpicado;
}

function filterFloat(evt, input) {
  // Backspace = 8, Enter = 13, ‘0′ = 48, ‘9′ = 57, ‘.’ = 46, ‘-’ = 43
  var key = window.Event ? evt.which : evt.keyCode;
  var chark = String.fromCharCode(key);
  var tempValue = input.value + chark;
  if (key >= 48 && key <= 57) {
    if (filter(tempValue) === false) {
      return false;
    } else {
      return true;
    }
  } else {
    if (key == 8 || key == 13 || key == 0) {
      return true;
    } else if (key == 46) {
      if (filter(tempValue) === false) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}
function filter(__val__) {
  var preg = /^([0-9]+\.?[0-9]{0,2})$/;
  if (preg.test(__val__) === true) {
    return true;
  } else {
    return false;
  }
}
