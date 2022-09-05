// Variables 

let ataqueJugador
let ataqueEnemigo
let resultado
let vidasJugador = 3
let vidasEnemigo = 3

alert("Добро пожаловать, Юлия, в мой первый проект :), надеюсь, он вам понравится, это что-то очень простое, но я делаю его с большой любовью и заботой о вас <3")

// Funcion para que el Jugador pueda Seleccionar una Mascota

function seleccionarMascotaJugador () {
    let lock = 1;
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert("SELECCIONA UN MOKEPON >:(")
        lock = 0;
    }
 
    if (lock == 1) {
        mascotaAleatoriaEnemiga();
    }
}

// Funcion para que el Enemigo elija una Mascota Aleatoria

function mascotaAleatoriaEnemiga () {
    let mascotaAleatoria = aleatorio(1,3);
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

// Funcion para Tener Aleatoriedad

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Funcion para Iniciar el Juego

function iniciarJuego () {
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego") 
    botonFuego.addEventListener('click', seleccionarAtaqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click', seleccionarAtaqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener('click', seleccionarAtaqueTierra)

    let reiniciar = document.getElementById('reiniciar')
    reiniciar.addEventListener('click',_ => {
        location.reload();
    });
}

// Funciones para Seleccionar los Ataques 

function seleccionarAtaqueFuego() {
    ataqueJugador =  'Огонь 🔥'

    ataqueEnemigoAleatorio();
}

function seleccionarAtaqueAgua() {
    ataqueJugador =  'Вода 💧'

    ataqueEnemigoAleatorio();
}

function seleccionarAtaqueTierra() {
    ataqueJugador =  'Земля 🌱'

    ataqueEnemigoAleatorio();
}

// Funcion para que el Ataque Enemigo sea Aleatorio

function ataqueEnemigoAleatorio() {
    let randomPower = aleatorio(1,3)

    if (randomPower == 1) {
        ataqueEnemigo = 'Огонь 🔥'
    } else if (randomPower == 2) {
        ataqueEnemigo = 'Вода 💧'
    } else {
        ataqueEnemigo = 'Земля 🌱'
    }

    combate();
}

// Funcion para el Combate de Mokepones

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (ataqueJugador == ataqueEnemigo) {
        resultado = "Это была ничья"
    } else if (ataqueJugador == 'Fuego 🔥' && ataqueEnemigo == 'Tierra 🌱') {
        resultado = "Вы выиграли"
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'Agua 💧' && ataqueEnemigo == 'Fuego 🔥') {
        resultado = "Вы выиграли"
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }  else if (ataqueJugador == 'Tierra 🌱' && ataqueEnemigo == 'Agua 💧') {
        resultado = "Вы выиграли"
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        resultado = "Вы потеряли"
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    crearMensaje();
}

function vidaStatus() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("Вы выиграли :)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Вы потеряли :(")
    }
}

// Funciones para mensajes

function crearMensaje() {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Ваш питомец напал с ' + ataqueJugador + ', талисман противника атаковал с ' + ataqueEnemigo + resultado

    sectionMensajes.appendChild(parrafo)

    vidaStatus();
}

function crearMensajeFinal(Final) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = Final
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego") 
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

// Aqui llamo a la Funcion Iniciar Juego

iniciarJuego();