// Ejecutar solo una vez por sesión
if (!sessionStorage.getItem("bienvenidaMostrada")) {
    alert("¡Bienvenido a nuestro sitio web!");
    sessionStorage.setItem("bienvenidaMostrada", "true");
}
