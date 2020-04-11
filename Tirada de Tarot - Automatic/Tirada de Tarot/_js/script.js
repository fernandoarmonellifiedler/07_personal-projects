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

/* sugestão feita por tiago
const img1 = document.createElement('img')
img1.setAttribute('class', 'foto')
const img2 = document.createElement('img')
img2.setAttribute('class', 'foto')
const img3 = document.createElement('img')
img3.setAttribute('class', 'foto')

function tirada() {
	if (valores.length <= 2) {
		window.alert("Agrega 3 cartas para realizar la tirada")
	} else {
		img1.setAttribute('src', `cartas/arcano_${valores[0]}.jpg`);
		document.getElementById('res').appendChild(img1);
		img2.setAttribute('src', `cartas/arcano_${valores[1]}.jpg`);
		document.getElementById('res').appendChild(img2);
		img3.setAttribute('src', `cartas/arcano_${valores[2]}.jpg`);
		document.getElementById('res').appendChild(img3);
	}
});
}