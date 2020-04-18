let carta = []
let aux = []
// function para seleccionar un valor random
function getCarta(min , max) {
    const valor = Math.random() * (max - min) + min
    return Math.round(valor)   
}

//function para asignar valores al array carta[0, 1, 2]
function inicio() {
    for (var i = 0 ; i <= 2 ; i++) {
		carta[i] = getCarta(0,21)
		while (carta[1] == carta[0]) {
			carta[1] = getCarta(0,21)
		}
		while (carta[2] == carta[1] || carta[2] == carta[0] ) {
			carta[2] = getCarta(0,21)
		} 
	}		
}

function tirada() {
	res.innerHTML = ''
	const img1 = document.createElement('img')
	img1.setAttribute('class', 'foto')
	const img2 = document.createElement('img')
	img2.setAttribute('class', 'foto')
	const img3 = document.createElement('img')
	img3.setAttribute('class', 'foto')
	inicio()
	img1.setAttribute('src', `_img/arcano_${carta[0]}.jpg`);
	document.getElementById('res').appendChild(img1);
	img2.setAttribute('src', `_img/arcano_${carta[1]}.jpg`);
	document.getElementById('res').appendChild(img2);
	img3.setAttribute('src', `_img/arcano_${carta[2]}.jpg`);
	document.getElementById('res').appendChild(img3);
}