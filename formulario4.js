let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let nombre = id("nombre"),
  email = id("email"),
  mensaje = id("mensaje"),
  terminos = id("terminos"),
  archivo = id("archivo"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

  let estaBien = true;  // Indica si pasa los requisitos

const requisitoEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  requisitoNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;


form.addEventListener("submit", (e) => {
  e.preventDefault();
  validar(nombre, 0, "El nombre no puede estar vacío ni contener números");
  validar(email, 1, "La dirección de correo electrónico no puede estar vacío debe cumplir con el formato correcto");
  validar(mensaje, 2, "El mensaje no puede estar vacío");
  validar(archivo, 3, "Debe subir un archivo");
  validar(terminos, 4, "Debes aceptar los términos y condiciones para enviar el formulario");
});

let validar = (id, serial, message) => {
  if (id == terminos) {   // Si es el checkbox se evalúa distinto
      estaBien = id.checked;  // chequeado true, no chequeado false
    }
    else {
      if (id.value.trim() == "") {  // Si el campo está vacío
        estaBien = false;
      } else {
        switch (id) {
          case email:
            estaBien = requisitoEmail.test(id.value);  // Evalúa si cumple con formato de email
            break;
          case nombre:
            estaBien = requisitoNombre.test(id.value);  // Evalúa si cumple con formato de nombre
            break;
          default:  // Los campos que no se evalúan (mensaje, archivo)
            estaBien = true;  
        }
      }
    }

    if (estaBien) {  // Si pasó la validación
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
  
      // muestra íconos
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
    } else {  // Si  no pasó la validación
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
  
      // muestra íconos
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    }

};