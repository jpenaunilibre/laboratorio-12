let password_co = "micontraseña123";
let password_in;

do{
    password_in = prompt("Por favor, ingresa tu contraseña");
    if(password_in != password_co){
        alert("La contraseña que ingresaste no coincide con tu contraseña actual")

    }
} while (password_in !== password_co);
alert("Contraseña correcta, ingresando al sistema...");