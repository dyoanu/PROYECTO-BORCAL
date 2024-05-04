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

const requisitoEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  requisitoNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  requisitoTelefono = /^\d{7,14}$/;


form.addEventListener("submit", (e) => {
  e.preventDefault();  

  validar(nombre, 0, "El nombre no puede estar vacío ni contener números");
  validar(email, 1, "La dirección de correo electrónico no puede estar vacío debe cumplir con el formato correcto");
  validar(telefono, 2, "Debe incluir un teléfono de contacto");
  validar(departamento, 3, "Debe seleccionar el destinatario de su mensaje");
  validar(archivo, 5, "Debe subir un archivo");
  validar(terminos, 6, "Debe aceptar los términos y condiciones para enviar el formulario");
  validar(mensaje, 4, "El mensaje no puede estar vacío");
});

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