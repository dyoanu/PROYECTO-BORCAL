function anioActual(){
    let anio = new Date().getFullYear();
    return anio;
 }

 function irPaginaAnterior() {
   window.history.back();
 }

 function escribirMenu(){
  document.write("<nav><section id='tabla-header'>")
  document.write("<a href='./index.html'><button class='boton' >INICIO</button></a>")
  document.write("<a href='./listadoProductos.html'><button class='boton' >PRODUCTOS</button></a>")
  document.write("<a href='./tecnica.html'><button class='boton' >INFO TECNICA</button></a>")
  document.write("<a href='./contacto.html'><button class='boton' >CONTACTO</button></a>")
  document.write("</section> </nav>")
 }

 function escribirSobre(){
    document.write("<section id='sobre'> <a href='./contacto.html' ><i class='fa-solid fa-envelope fa-flip-horizontal fa-2xl' ;></i></a></section>")
 }

 function escribirFlecha(){
   document.write("<section id='flecha'> <a href='#' ><i class='fa-solid fa-angles-up fa-2xl';></i></a></section>")
 }

 function escribirFooter(){
    document.write("<div class='tabla-footer'>")
    document.write("<div class='td3'>")
    document.write("<a class='redes' href='redes.html'><i class='fa-brands fa-linkedin fa-xl'></i></a>")
    document.write("<a class='redes' href='redes.html'><i class='fa-brands fa-facebook fa-xl'></i></a>")
    document.write("<a class='redes' href='redes.html'><i class='fa-brands fa-twitter fa-xl'></i></a>")
    document.write("<a class='redes' href='redes.html'><i class='fa-brands fa-whatsapp fa-xl'></i></a>")
    document.write("<a class='redes' href='./contacto.html' ><i class='fa-solid fa-envelope fa-xl'></i></a>")
    document.write("</div>")
    document.write("<div class='td4'>")
    document.write("<p>Zelada 4746, (C1407GXH) CABA, Argentina. Teléfono: (011) 4635-8180 - Líneas Rotativas - Fax: Int. 12 /  Copyright All Rights Reserved © <script>document.write(anioActual())</script></p> </div>")
    document.write("</div>")
 }





