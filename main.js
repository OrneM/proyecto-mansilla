const usuarios = []

alert ("🍕¡Bienvenido a Pizzería Fauget! 🍕")

let cantidadComensales = parseInt (prompt("Ingrese la cantidad de comensales 👥 "))
  if (cantidadComensales <= 8) {
    alert (" ✅ Hay mesas disponibles") 
    diaDisponible()  
} else {
    alert(" ❌ No hay mesas disponibles")
}


function diaDisponible() {
    let diaIngresado = prompt(" 🗓️ Ingrese el día que quiere reservar: Miercoles, Jueves, Viernes, Sabado, Domingo")
    let diaIngresadoLowerCase = diaIngresado.toLowerCase()
    if (diaIngresadoLowerCase === "miercoles" || diaIngresadoLowerCase === "jueves" || diaIngresadoLowerCase === "viernes" || diaIngresadoLowerCase=== "sabado" || diaIngresadoLowerCase === "domingo") {
    alert("✅ El dia que eligió está disponible")
    horarioDisponible()
    } else {
        alert(" ❌ El día no esta disponible")
}

    function horarioDisponible (){
        let horario = parseInt (prompt(" 🕒 Ingrese el horario que quiere reservar: 18 hs, 19hs, 20hs, 21hs, 22hs, 23hs " ))
        if  (horario === 18 || horario === 19 || horario === 20 || horario === 21 || horario === 22 || horario === 23){
        alert("✅ Su horario esta disponibles, acepte para continuar")
        usuarios.push(ingresarUsuario())
        console.log(usuarios)  
        alert( " 🎊 Su reserva ha sido exitosa, lo esperamos con sus comensales el dia " + diaIngresado + " a las "+ horario + " hs 🎊" )     
        }   else {
        alert(" ❌ Su horario no esta disponibles, intente en otro horario")        
        }
    }
}


function ingresarUsuario() {
    const usuario = {}

    usuario.nombre = prompt(" 👤 Ingrese su nombre:")
    usuario.apellido = prompt(" 👤 Ingrese su apellido:")
    usuario.telefono = parseInt(prompt(" 📞 Ingrese su teléfono: "))
    
    return usuario
     
}

