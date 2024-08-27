function cambiarTextoBotonIniciar() {
    let TextoBoton = document.getElementById("boton-iniciar");
    TextoBoton.value = "Iniciando"
}

function volverPaginaPrincipal() {
    document.getElementById("boton-incio").addEventListener('click', function () {
        window.location.href = "../html/principal.html"
    })
}

function redirijeClientes() {
    document.getElementById("boton-clientes").addEventListener("click", function () {
        window.location.href = "../html/mostrar-clientes.html"
    })
}

function paginaNuevoCliente() {
    document.getElementById("boton-nuevo-cliente").addEventListener("click", function() {
        window.location.href="../html/nuevo-cliente.html"
    })
}

function paginaModificarCliente() {
    document.getElementById("boton-modificar-cliente").addEventListener("click",function(){
        window.location.href="../html/modificar-cliente.html"
    })

}

function redirijeEliminarCliente() {
    document.getElementById("boton-eliminar-cliente").addEventListener('click', function () {
        window.location.href = "../html/eliminar-clientes.html"
    })
}

function paginaTrabajosPendiente() {
    document.getElementById("boton-trabajos-pendientes").addEventListener("click",function(){
        window.location.href="../html/trabajos-pendientes.html"
    })
    
}


function cerrarSesion() {
    document.getElementById("boton-cerrar-sesion").addEventListener('click', function () {
        window.location.href = "..//html/index.html"
    })
}







/* 

<a href="../html/principal.html" id="boton-incio" type="button" class="btn btn-outline-dark">Inicio</a>
<a href="../html/principal.html" id="boton-incio" type="button" class="btn btn-outline-dark">Inicio</a> */