// Variable vacía para ir sumando el contenido a mostrarse 
let listadoProductosA = ``
let listadoProductosB = ``
let listadoProductosC = ``

// Recorrer los datos y sacar la información
for(let elemento of datos){

    // Separar los productos por categoría
    switch (elemento.cat){

        case "1":
            listadoProductosA = listadoProductosA + `
    
            <div class="producto-card">
                <div class="producto-imagen" style="background-image: url('${elemento.imagen}');"></div>
                <div class="producto-contentenido">
                    <h2>${elemento.titulo}</h2>
                    <p class="articulo">${elemento.articulo}</p>
           
                    <i class="fa-solid fa-angles-right fa-lg" style="color: #FFD43B;"></i>${elemento.tilde1}<br>
                    <i class="fa fa-angle-right" aria-hidden="true" style="color: yellow;"></i>${elemento.tilde2}<br>
                    <i class="fa fa-angle-right" aria-hidden="true" style="color: yellow;"></i>${elemento.tilde3}<br>
                    <i class="fa fa-angle-right" aria-hidden="true" style="color: yellow;"></i>${elemento.tilde4}<br>
                    <i class="fa fa-angle-right" aria-hidden="true" style="color: yellow;"></i>${elemento.tilde5}<br>  
             
                </div>
                
            </div>
            <br>
            <br>
            `;
            break;
        case "2":
            listadoProductosB = listadoProductosB + `

            <div class="producto-card">
                <div class="producto-imagen" style="background-image: url('${elemento.imagen}');"></div>
                <div class="producto-contentenido">
                    <h2>${elemento.titulo}</h2>
                    <p class="articulo">${elemento.articulo}</p>
        
                    <i class="fa fa-angle-right" aria-hidden="true" style="color: yellow;"></i>${elemento.tilde1}<br>
                    <i class="fa fa-angle-right" aria-hidden="true" style="color: yellow;"></i>${elemento.tilde2}<br>
                    <i class="fa fa-angle-right" aria-hidden="true" style="color: yellow;"></i>${elemento.tilde3}<br>
                    <i class="fa fa-angle-right" aria-hidden="true" style="color: yellow;"></i>${elemento.tilde4}<br>
                    <i class="fa fa-angle-right" aria-hidden="true" style="color: yellow;"></i>${elemento.tilde5}<br>  
         
                </div>
            
            </div>
            <br>
            <br>
            `;
            break;
        case "3":
            listadoProductosC = listadoProductosC + `

            <div class="producto-card">
                <div class="producto-imagen" style="background-image: url('${elemento.imagen}');"></div>
                <div class="producto-contentenido">
                    <h2>${elemento.titulo}</h2>
                    <p class="articulo">${elemento.articulo}</p>
           
                    ${elemento.tilde1}<br>
                    ${elemento.tilde2}<br>
                    ${elemento.tilde3}<br>
                    ${elemento.tilde4}<br>
                    ${elemento.tilde5}<br>  
             
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

// Mostrar los datos 
document.querySelector(".listadoProductosA").innerHTML=listadoProductosA
document.querySelector(".listadoProductosB").innerHTML=listadoProductosB
document.querySelector(".listadoProductosC").innerHTML=listadoProductosC


