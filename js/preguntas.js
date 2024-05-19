let listadoPreguntas = ``

for (let elemento of datos){

    listadoPreguntas = listadoPreguntas + `

    <div class="pregunta-card">
    <div class="pregunta-contentenido">
        <p class="pregunta-pregunta">${elemento.pregunta}</p>
        <p class="pregunta-respuesta">${elemento.respuesta}</p>
    </div>
    </div>
    <br>
    <br>
    `
}

document.querySelector(".listadoPreguntas").innerHTML=listadoPreguntas