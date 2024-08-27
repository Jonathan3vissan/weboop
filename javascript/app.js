function cambiarTextoBotonIniciar() {
    let TextoBoton= document.getElementById("boton-iniciar");
   TextoBoton.value = "Iniciando"
}



function volverPaginaPrincipal() {
     document.getElementById("boton-incio").addEventListener('click',function(){
        window.location.href="../html/principal.html"
    })
}


function cerrarSesion (){
    document.getElementById("boton-cerrar-sesion").addEventListener('click', function(){
        window.location.href="..//html/index.html"
    })
}

/* 

<a href="../html/principal.html" id="boton-incio" type="button" class="btn btn-outline-dark">Inicio</a>
<a href="../html/principal.html" id="boton-incio" type="button" class="btn btn-outline-dark">Inicio</a> */