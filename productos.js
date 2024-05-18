// Variable vacía para ir sumando el contenido a mostrarse 
let listadoProductos = ``
let listadoProductosA = ``
let listadoProductosB = ``
let listadoProductosCat1 = ``
let listadoProductosCat2 = ``
let listadoProductosCat3 = ``

// recorrer los datos y sacar la información
for(let elemento of datos){

    switch (elemento.cat){

        case "1":
            listadoProductosCat1 = listadoProductosCat1 + `
    
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
            `;
            break;
        case "2":
            listadoProductosCat2 = listadoProductosCat2 + `

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
            `;
            break;
        case "3":
            listadoProductosCat3 = listadoProductosCat3 + `

            <div class="producto-card">
                <div class="producto-imagen" style="background-image: url('${elemento.imagen}');"></div>
                <div class="producto-contentenido">
                    <h2>${elemento.titulo}</h2>
                    <p class="articulo">${elemento.articulo}</p>
           
                    <i class="fa fa-angle-right"  aria-hidden="true" style="color: yellow;"></i>${elemento.tilde1}<br>
                    <i class="fa fa-angle-right"  aria-hidden="true" style="color: yellow;"></i>${elemento.tilde2}<br>
                    <i class="fa fa-angle-right"  aria-hidden="true" style="color: yellow;"></i>${elemento.tilde3}<br>
                    <i class="fa fa-angle-right"  aria-hidden="true" style="color: yellow;"></i>${elemento.tilde4}<br>
                    <i class="fa fa-angle-right"  aria-hidden="true" style="color: yellow;"></i>${elemento.tilde5}<br>  
             
                </div>
                
            </div>
            <br>
            <br>
            `;
            break;
        default:
            break;
    }


}

listadoProductos = listadoProductosCat1 ;

listadoProductosA = listadoProductosCat2 ;

listadoProductosB = listadoProductosCat3 ;

// Muestro los datos 
document.querySelector(".listadoProductos").innerHTML=listadoProductos

document.querySelector(".listadoProductosA").innerHTML=listadoProductosA

document.querySelector(".listadoProductosB").innerHTML=listadoProductosB


