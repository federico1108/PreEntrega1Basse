

let repetir = true

while (repetir){

    
    function promediar(){
        let parcialUno , parcialDos , final , tpUno , tpDos

        parcialUno = Number(prompt("Ingrese la nota del primer parcial: "))
    
        parcialDos = Number(prompt("Ingrese la nota del segundo parcial: "))
        
        tpUno = Number(prompt("Ingrese la nota del Trabajo Practico N°1: "))
        
        tpDos = Number(prompt("Ingrese la nota del Trabajo Practico N°2: "))

        promedioPromocion = (parcialUno + parcialDos + tpUno + tpDos) / 4
    }
        
    promediar()

if (promedioPromocion < 7){
    final = prompt("No promocionaste, por lo tanto rendis final. Ingrese la nota de su final: ")
    if (final < 4){
        alert("Desaprobaste la materia, por lo tanto deberas rendirla nuevamente.")
    }
    else {
        alert("Aprobaste la materia")
    }
    
}
else {
    alert("Promocionaste la materia, estas aprobado")
}

nuevoCalculo = prompt("¡Desea calcular su promedio nuevamente? Si/No").toLowerCase()
if(nuevoCalculo == "no") {
    repetir = false

}

}
