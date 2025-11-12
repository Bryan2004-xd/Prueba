// REGISTRO
function register() {
    const nombre = document.getElementById("regNombre").value;
    const apellido = document.getElementById("regApellido").value;
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPass").value;
    const pass2 = document.getElementById("regPass2").value;

    if (!nombre || !apellido || !email || !pass || !pass2) {
        alert("Completa todos los campos.");
        return;
    }

    if (pass !== pass2) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    if (localStorage.getItem(email)) {
        alert("Este correo ya está registrado.");
        return;
    }

    const user = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: pass
    };

    localStorage.setItem(email, JSON.stringify(user));

    alert("Cuenta creada con éxito ✅");
    window.location.href = "login.html";
}



// LOGIN
function login() {
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPass").value;

    const user = JSON.parse(localStorage.getItem(email));

    if (!user) {
        alert("Correo no registrado.");
        return;
    }

    if (user.password === pass) {
        alert("Inicio de sesión correcto ✅");
        window.location.href = "index.html";
    } else {
        alert("Contraseña incorrecta ❌");
    }
}
