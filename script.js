const ingresoTexto = document.getElementById("textoEncriptar");
const egresoTexto = document.getElementById("textoSalida");

const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");

function validarTexto(texto){
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz";
    let mensaje = ingresoTexto.value;
    if(mensaje == ""){
        alert("Aun no ingresa un texto, debe ingresarlo");
        return false;
    }
    for (let letra of mensaje){
        if(!letrasValidas.includes(letra)){
            alert("Ingreso caracteres no permitidos, corrija el mensaje");
            return false;
        }
    } return true;
}

function encriptar(){
    if(!validarTexto())return;
    let mensaje = ingresoTexto.value;
    let mensajeEncriptado = mensaje.replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");

    document.getElementById("imagenDibujo").style.display = "none";
    document.getElementById("imagenSinTexto").style.display = "none";
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";

    egresoTexto.value = mensajeEncriptado;
}

function desencriptar(){
    if(!validarTexto())return;
    let mensaje = ingresoTexto.value;
    let mensajeDesencriptado = mensaje.replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");

    document.getElementById("imagenDibujo").style.display = "none";
    document.getElementById("imagenSinTexto").style.display = "none";
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";

    egresoTexto.value = mensajeDesencriptado;
}

function copiar(){
    let mensajeEncriptado = egresoTexto.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;