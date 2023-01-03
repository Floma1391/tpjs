//valor de la entrada
const valorEntrada = 200;

//defino inputs
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
const btnResumen = document.getElementById("resumen");
const btnBorrar = document.getElementById("borrar");

function calcular(event) {
  event.preventDefault();
  let cant = parseInt(document.getElementById("cant").value);
  let cat = document.getElementById("cat").value;
  let total = document.getElementById("total");

  var result;

  switch (cat) {
    case "1":
      result = cant * valorEntrada - cant * valorEntrada * 0.8;
      total.innerHTML = `Total a pagar: $ ${result}`;
      console.log(cant);
      break;

    case "2":
      result = cant * valorEntrada - cant * valorEntrada * 0.5;
      total.innerHTML = `Total a pagar: $ ${result}`;
      break;

    case "3":
      result = cant * valorEntrada - cant * valorEntrada * 0.15;
      total.innerHTML = `Total a pagar: $ ${result}`;
      break;

    case "4":
      result = cant * valorEntrada;
      total.innerHTML = `Total a pagar: $ ${result}`;
      break;
  }
 }



btnResumen.addEventListener("click", calcular);
