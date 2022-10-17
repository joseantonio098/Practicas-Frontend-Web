// -----------------------Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const btnResetear = document.getElementById('resetBtn');

// -----------------------Eventos

eventListener();

function eventListener(){

    // Inicio de la aplicación y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // Botón de enviar en el submit
    btnEnviar.addEventListener('click', enviarEmail);

    // Botón de resetear formulario
    btnResetear.addEventListener('click', resetearFormulario)
}

// -----------------------Funciones

function inicioApp(){

    // Deshabilitar el envio
    btnEnviar.disabled = true;
} 

// Valida que el campo tenga algo escrito
function validarCampo(){
    
    // Se valida la longitud del texto y que no esté vacío
    validarLongitud(this);

    // Validar únicamente el email
    if(this.type === 'email'){
        validarEmail(this);
    }

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){

        // Si no hay campos con clase de error
        let errores = document.querySelectorAll('.error');
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
    }
}

// Verifica la longitud del texto en los campos
function validarLongitud(campo){

    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }

}

function validarEmail(campo){

    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

// Cuando se envía el correo
function enviarEmail(e){

    // Spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    // Gif que envía email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    // Ocultar Spinner y mostrar Gif de enviado
    setTimeout(function(){
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function(){
            enviado.remove();
            document.querySelector('form').reset();
        }, 5000);

    }, 3000);

    e.preventDefault();
}

// Resetear el formulario
function resetearFormulario(e){
    document.querySelector('form').reset();
    e.preventDefault();
}