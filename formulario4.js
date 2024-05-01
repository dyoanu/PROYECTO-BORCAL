let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  mensaje = id("mensaje"),
  terminos = id("terminos"),
  archivo = id("archivo"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "El nombre no puede estar vacío");
  engine(email, 1, "La dirección de correo electrónico no puede estar vacío");
  engine(mensaje, 2, "El mensaje no puede estar vacío");
  engine(archivo,3, "Debe subir un archivo");
  if (!terminos.checked) {
    terminos.value = "";
    engine(terminos, 4, "Debes aceptar los términos y condiciones para enviar el formulario.");
  }
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // íconos
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // íconos
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};