// Variable vacía para ir sumando el contenido a mostrarse 
let listadoProductos = ``

// recorrer los datos y sacar la información
for(let elemento of datos){

    listadoProductos = listadoProductos + `
    
    <div class="producto-card">
        <div class="producto-imagen" style="background-image: url('${elemento.imagen}');"></div>
        <div class="producto-contentenido">
            <h2>${elemento.titulo}</h2>
            <p class="articulo">${elemento.articulo}</p>
   
            <i class="fa fa-angle-right" aria-hidden="true" style="color: yellow;"></i>${elemento.tilde1}<br>
            <i class="fa fa-angle-right"  aria-hidden="true" style="color: yellow;"></i>${elemento.tilde2}<br>
            <i class="fa fa-angle-right"  aria-hidden="true" style="color: yellow;"></i>${elemento.tilde3}<br>
            <i class="fa fa-angle-right"  aria-hidden="true" style="color: yellow;"></i>${elemento.tilde4}<br>
            <i class="fa fa-angle-right"  aria-hidden="true" style="color: yellow;"></i>${elemento.tilde5}<br>  
     
        </div>
        
    </div>
    <br>
    <br>
    `
}

// Muestro los datos 
document.querySelector(".listadoProductos").innerHTML=listadoProductos


