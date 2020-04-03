var carta = []

// function para seleccionar un valor random
function getCarta(min , max) {
    const valor = Math.random() * (max - min) + min
    return Math.round(valor)   
}

//function para asignar valores al array carta[0, 1, 2]
function inicio() {
    for (var i = 0 ; i <= 2 ; i++)
        carta[i] = getCarta(0,21)
        return carta[i]   
}

inicio()
console.log(carta[0])
console.log(carta[1])
console.log(carta[2])
 