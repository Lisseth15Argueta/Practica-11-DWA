//Funcion que recibe datos  de un usuario y soporte el resto de la informacion
function procesarUsuario(nombre, edad, ...OtroDatos){
    let usuarioFormutado = {
        nombre,
        edad,
        infoAdicional: [...OtroDatos]
    };
    return usuarioFormutado;
}

//simulamos datos recibidos de una API
let usuario = procesarUsuario("Lisseth", 27, "Ingeniera", "El Salvador", "Marzo 2024")

console.log(usuario);