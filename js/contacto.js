let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let nombre = id("nombre"),
  email = id("email"),
  mensaje = id("mensaje"),
  terminos = id("terminos"),
  archivo = id("archivo"),
  telefono = id("telefono"),
  departamento = id("departamento"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

let estaBien = true;  // Indica si pasa los requisitos

let sePuedeEnviar = 0;

const requisitoEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  requisitoNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  requisitoTelefono = /^\d{7,14}$/;


let validar = (id, orden, message) => {    // valida qué campo, el orden para mostrar el error, qué mensaje de error
  if (id === terminos) {   // Si es el checkbox se evalúa distinto
    estaBien = id.checked;  // chequeado true, no chequeado false
  }
  else {
    if (id.value.trim() === "") {  // Si el campo está vacío
      estaBien = false;
    } else {
      switch (id) {
        case email:
          estaBien = requisitoEmail.test(id.value);  // Evalúa si cumple con formato de email
          break;
        case nombre:
          estaBien = requisitoNombre.test(id.value);  // Evalúa si cumple con formato de nombre
          break;
        case telefono:
          estaBien = requisitoTelefono.test(id.value);  // Evalúa si cumple con formato número de teléfono
          break;
        default:  // Los campos que no se de manera particular evalúan (mensaje, archivo)
          estaBien = true;
      }
    }
  }

  if (estaBien) {  // Si pasó la validación
    errorMsg[orden].innerHTML = "";
    id.style.border = "2px solid green";

    // muestra íconos
    failureIcon[orden].style.opacity = "0";
    successIcon[orden].style.opacity = "1";
  } else {  // Si  no pasó la validación
    errorMsg[orden].innerHTML = message;
    id.style.border = "2px solid red";

    // muestra íconos
    failureIcon[orden].style.opacity = "1";
    successIcon[orden].style.opacity = "0";
  }

};

form.addEventListener("submit", (e) => {
  e.preventDefault();   // evita mandar formulario sin datos
  sePuedeEnviar = 0;   // pone en 0 la variable que va a controlar cuántos campos están ok
  validar(nombre, 0, "El nombre no puede estar vacío ni contener números");
  if (estaBien){
    sePuedeEnviar += 1;  // si está ok el campo, sumo 1
  };
  validar(email, 1, "La dirección de correo electrónico no puede estar vacío debe cumplir con el formato correcto");
  if (estaBien){
    sePuedeEnviar += 1;
  };
  validar(telefono, 2, "Debe incluir un teléfono de contacto");
  if (estaBien){
    sePuedeEnviar += 1;
  };
  validar(departamento, 3, "Debe seleccionar el destinatario de su mensaje");
  if (estaBien){
    sePuedeEnviar += 1;
  };
  validar(mensaje, 4, "El mensaje no puede estar vacío");
  if (estaBien){
    sePuedeEnviar += 1;
  };
  validar(archivo, 5, "Debe subir un archivo");
  if (estaBien){
    sePuedeEnviar += 1;
  };
  validar(terminos, 6, "Debe aceptar los términos y condiciones para enviar el formulario");
  if (estaBien){
    sePuedeEnviar += 1;
  };

  if (sePuedeEnviar == 7){    // hay 7 campos en el formulario, si la variable es 7 quiere decir que están todos ok
    alert("Se envió el formulario");
    form.reset();    // resetea los campos del formulario
    for (let icono of successIcon){    // borra todos los íconos de exito
      icono.style.opacity = "0";
    }
    
  }

});



function getPaginaOrigen() {
  const paginaOrigen = document.referrer;  // de qué página llega a contacto.html

  if (paginaOrigen.includes("index.html")) {
    return "inicio";
  } else if (paginaOrigen.includes("Productos")) {
    return "productos";
  } else if (paginaOrigen.includes("tecnica.html")) {
    return "infotecnica";
  } else {
    return "otros";
  }
}

const selectElement = document.getElementById("departamento");  // en el campo destino del mensaje

switch (getPaginaOrigen()) {  // elijo qué opción poner por defecto
  case "inicio":
    selectElement.value = "atencion-al-cliente";
    break;
  case "productos":
    selectElement.value = "ventas";
    break;
  case "infotecnica":
    selectElement.value = "tecnica";
    break;
  default:
    selectElement.value = "";
}