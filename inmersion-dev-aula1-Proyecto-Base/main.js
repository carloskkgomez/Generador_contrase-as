let cantidad = document.getElementById('cantidad');// Declaramos las variables let, y los nombres que le asignamos 
let botonGenerar = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Caracteres para la contraseña
const caracteresEspeciales = '!@#$%^&*()'; // Caracteres especiales

function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado <= 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return; // Salir de la función si la cantidad es menor o igual a 8
    }

    let password = '';
    // Incluir al menos un carácter especial
    password += caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];

    // Generar los caracteres restantes
    for (let i = 1; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    // Mezclar los caracteres de la contraseña para asegurarse de que no siempre el carácter especial esté al inicio
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    console.log("Contraseña generada: " + password); // Mostrar la contraseña completa en la consola
    contrasena.value = password;

    // Validar la fuerza de la contraseña
    setTimeout(() => { validarFuerza(password); }, 100); // Agregar un pequeño retardo antes de validar la contraseña
}

function limpiar() {
    contrasena.value = ''; // Limpiar el valor del campo de contraseña
    cantidad.value = ''; // Limpiar el valor del campo de cantidad de caracteres
}

function validarFuerza(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneCaracterEspecial = /[!@#$%^&*()]/.test(password);

    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneCaracterEspecial) {
        alert("La contraseña es fuerte.");
    } else {
        alert("La contraseña es débil. Debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.");
    }
}

// Añadir los event listeners para ambos botones
botonGenerar.addEventListener('click', generar);
botonLimpiar.addEventListener('click', limpiar);
