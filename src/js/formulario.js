
// Validacion del formulario....

const evento = document.querySelector('#btn-enviar');

let alertaNombre = document.querySelector('#alerta-nombre');
let alertaAsunto = document.querySelector('#alerta-asunto');
let alertaMensaje = document.querySelector('#alerta-mensaje');

evento.addEventListener('click', e=>{
    e.preventDefault()

    let nombre = document.querySelector('#inp-nombre').value;
    let asunto = document.querySelector('#inp-asunto').value;
    let mensaje = document.querySelector('#inp-mensaje').value;

    if (nombre === '' || nombre.length >= 10){
        alertaNombre.innerHTML = 'Por favor ingrese su nombre no mayor a 20 caracteres';
        setTimeout( ()=>{
            alertaNombre.innerHTML = ''
        },3000)
    }
    if (asunto === '' || asunto.length >= 40){
        alertaAsunto.innerHTML = 'Por favor ingresar el asunto, no mayor a 50 caracteres';
        setTimeout( ()=>{
            alertaAsunto.innerHTML = ''
        },3000)
    }
    if (mensaje === '' || asunto.length >= 400){
        alertaMensaje.innerHTML = 'Por favor ingresar el mensaje, no mayor a 350 caracteres';
        setTimeout( ()=>{
            alertaMensaje.innerHTML = ''
        },3000)
    }
    else{
        console.log(typeof nombre);
        console.log(typeof asunto);
        console.log(typeof mensaje);
        let numero = 1154709438;
        var win = window.open(`https://wa.me/${numero}?text=hola%20mi%20nombre%20es%20${nombre}
        %0A Asunto:%20${asunto}
        %0A Mensaje: ${mensaje}.`, '_blank');
        location.reload(); 
    }
    
})




// Conexion del formulario con la aplicacion de WhatsApp

/*
const evento = document.querySelector('#btn-enviar');

const enviarFormulario = ()=>{
    let numero = 1154709438;
    var win = window.open(`https://wa.me/${numero}?text=hola%20mi%20nombre%20es%20${nombre}
    %0A Asunto:%20${asunto}
    %0A Mensaje: ${mensaje}.`, '_blank');
}

evento.addEventListener('click', enviarFormulario);
*/




