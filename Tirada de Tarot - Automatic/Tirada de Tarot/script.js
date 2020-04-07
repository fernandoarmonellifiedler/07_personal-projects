let carta = []
let arc = []
//var img = []

// function para seleccionar un valor random
function getCarta(min , max) {
    const valor = Math.random() * (max - min) + min
    return Math.round(valor)   
}

//function para asignar valores al array carta[0, 1, 2]
function inicio() {
    for (let i = 0 ; i <= 2 ; i++) 
        carta[i] = getCarta(0,21)
        return carta[i]           
}

function asignarArcano() {
    for (let i = 0 ; i <= 21 ; i++) {
        arc[i] = document.createElement("img").src = `cartas/arcano_${i}.jpg`
        console.log(arc[i])
    }
}

/*
inicio()
console.log(carta[0])
console.log(carta[1])
console.log(carta[2])

asignarArcano()

console.log(arc[4])
*/
// document.getElementById("image").src = "pic_mountain.jpg";
//img[i].url=`cartas/arcano_${i}.jpg`