var nombre = document.getElementById('nombre');
var correo = document.getElementById('correo');
var mensaje = document.getElementById('mensaje');
var parrafo = document.getElementById('warning')


function enviarForm() {
    console.log("enviar formulario...");
    var mensajesError = [];
    var entrar = false
    var regexCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML = ""
    if(nombre.value === null || nombre.value === ''){
        alert('ingresa tu nombre');
        entrar = true
    }
    console.log(regexCorreo.test(correo.value))
    if(!regexCorreo.test(correo.value)){
        alert('ingresa un correo valido');
        entrar = true
    }
    if(mensaje.value === null || mensaje.value === ''){
        alert('ingresa tu mensaje');
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warning

    }else{
        alert('..enviado..')
    }

   error.innerHTML = mensajesError.join(', ');


return false;
}
