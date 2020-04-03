/*
1_ funcion para tomar 3 cartas entre 0 y 21
2_ asignar imagen y arcano a esas 3 cartas


function getCartas(min , max) {
    const valor = Math.random() * (max - min) + min
    return Math.round()
}

carta[i] = getCarta(0,21)
*/
var carta = []


function getCarta(min , max) {
    const valor = Math.random() * (max - min) + min
    return Math.round(valor)   
}

function inicio() {
    for (var i = 0 ; i <= 2 ; i++)
        carta[i] = getCarta(0,21)
        return carta[i]   
}
 
inicio()
console.log(carta[0])
console.log(carta[1])
console.log(carta[2])
