let num = document.querySelector('input#txtn')
let res = document.querySelector('div#res')
let lista = document.querySelector('select#selcartas')
let valores = []

let carta1 = valores[0]
let carta2 = valores[1]
let carta3 = valores[2]


function agregarCarta() {
     if (valores.length >= 3) {
        valores.splice(3 , 1)
        window.alert('Seleccionar solo 3 cartas!')
     } else if (isNumber(num.value) && !inList(num.value, valores) ) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Carta ${num.value} agregada.`
        lista.appendChild(item)
        res.innerHTML = ''
        //res.innerHTML = `Cantidad de cartas agregadas es ${valores.length}`
    } else {
        window.alert('Valor incorrecto o ya encontrado en la lista')
    }
    num.value = ''
    num.focus()
}


function isNumber(n) {
    if(Number(n) >= 0 && Number(n) <= 21) {
        return true
    } else {
        return false
    }
}

function inList(n , l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// arcanos
var arcano_0 


// cartas
//document.getElementById('body').appendChild('img')
//img.src = '../cartas/arcano_0.jpg'
// ver donde colocar

var img1 = document.createElement('img1')
img1.setAttribute('id', 'foto')
var img2 = document.createElement('img2')
img2.setAttribute('id', 'foto')
var img3 = document.createElement('img3')
img3.setAttribute('id', 'foto')




//Botón que calcula la tirada:
function tirada() {
    if (valores.length == 0 || valores.length <= 2) {
        window.alert("Agrega 3 cartas para realizar la tirada")
    } else if (carta1 = Number(num.value)) {
        if (carta1 = 0) {
            img1.setAttribute('carta1', 'cartas/arcano_0.jpg')
            img1.src = 'cartas/arcano_0.jpg'
        } else if (carta1 = 1) {
            img1.setAttribute('carta1', 'cartas/arcano_1.jpg')
        } else if (carta1 = 2) {
            img1.setAttribute('carta1', 'cartas/arcano_2.jpg')
        } else if (carta1 = 3) {
            img1.setAttribute('carta1', 'cartas/arcano_3.jpg')
        } else if (carta1 = 4) {
            img1.setAttribute('carta1', 'cartas/arcano_4.jpg')
        } else if (carta1 = 5) {
            img1.setAttribute('carta1', 'cartas/arcano_5.jpg')
        } else if (carta1 = 6) {
            img1.setAttribute('carta1', 'cartas/arcano_6.jpg')
        } else if (carta1 = 7) {
            img1.setAttribute('carta1', 'cartas/arcano_7.jpg')
        } else if (carta1 = 8) {
            img1.setAttribute('carta1', 'cartas/arcano_8.jpg')
        } else if (carta1 = 9) {
            img1.setAttribute('carta1', 'cartas/arcano_9.jpg')
        } else if (carta1 = 10) {
            img1.setAttribute('carta1', 'cartas/arcano_10.jpg')
        } else if (carta1 = 11) {
            img1.setAttribute('carta1', 'cartas/arcano_11.jpg')
        } else if (carta1 = 12) {
            img1.setAttribute('carta1', 'cartas/arcano_12.jpg')
        } else if (carta1 = 13) {
            img1.setAttribute('carta1', 'cartas/arcano_13.jpg')
        } else if (carta1 = 14) {
            img1.setAttribute('carta1', 'cartas/arcano_14.jpg')
        } else if (carta1 = 15) {
            img1.setAttribute('carta1', 'cartas/arcano_15.jpg')
        } else if (carta1 = 16) {
            img1.setAttribute('carta1', 'cartas/arcano_16.jpg')
        } else if (carta1 = 17) {
            img1.setAttribute('carta1', 'cartas/arcano_17.jpg')
        } else if (carta1 = 18) {
            img1.setAttribute('carta1', 'cartas/arcano_18.jpg')
        } else if (carta1 = 19) {
            img1.setAttribute('carta1', 'cartas/arcano_19.jpg')
        } else if (carta1 = 20) {
            img1.setAttribute('carta1', 'cartas/arcano_20.jpg')
        } else {
            img1.setAttribute('carta1', 'cartas/arcano_21.jpg')
        }
    
    } else if (carta2 = num.value) {
        if (carta2 = 0) {
            img2.setAttribute('carta2', 'cartas/arcano_0.jpg')
        } else if (carta2 = 1) {
            img2.setAttribute('carta2', 'cartas/arcano_1.jpg')
        } else if (carta2 = 2) {
            img2.setAttribute('carta2', 'cartas/arcano_2.jpg')
        } else if (carta2 = 3) {
            img2.setAttribute('carta2', 'cartas/arcano_3.jpg')
        } else if (carta2 = 4) {
            img2.setAttribute('carta2', 'cartas/arcano_4.jpg')
        } else if (carta2 = 5) {
            img2.setAttribute('carta2', 'cartas/arcano_5.jpg')
        } else if (carta2 = 6) {
            img2.setAttribute('carta2', 'cartas/arcano_6.jpg')
        } else if (carta2 = 7) {
            img2.setAttribute('carta2', 'cartas/arcano_7.jpg')
        } else if (carta2 = 8) {
            img2.setAttribute('carta2', 'cartas/arcano_8.jpg')
        } else if (carta2 = 9) {
            img2.setAttribute('carta2', 'cartas/arcano_9.jpg')
        } else if (carta2 = 10) {
            img2.setAttribute('carta2', 'cartas/arcano_10.jpg')
        } else if (carta2 = 11) {
            img2.setAttribute('carta2', 'cartas/arcano_11.jpg')
        } else if (carta2 = 12) {
            img2.setAttribute('carta2', 'cartas/arcano_12.jpg')
        } else if (carta2 = 13) {
            img2.setAttribute('carta2', 'cartas/arcano_13.jpg')
        } else if (carta2 = 14) {
            img2.setAttribute('carta2', 'cartas/arcano_14.jpg')
        } else if (carta2 = 15) {
            img2.setAttribute('carta2', 'cartas/arcano_15.jpg')
        } else if (carta2 = 16) {
            img2.setAttribute('carta2', 'cartas/arcano_16.jpg')
        } else if (carta2 = 17) {
            img2.setAttribute('carta2', 'cartas/arcano_17.jpg')
        } else if (carta2 = 18) {
            img2.setAttribute('carta2', 'cartas/arcano_18.jpg')
        } else if (carta2 = 19) {
            img2.setAttribute('carta2', 'cartas/arcano_19.jpg')
        } else if (carta2 = 20) {
            img2.setAttribute('carta2', 'cartas/arcano_20.jpg')
        } else {
            img2.setAttribute('carta2', 'cartas/arcano_21.jpg')
        }
    } else {
        if (carta3 = 0) {
            img3.setAttribute('carta3', 'cartas/arcano_0.jpg')
        } else if (carta3 = 1) {
            img3.setAttribute('carta3', 'cartas/arcano_1.jpg')
        } else if (carta3 = 2) {
            img3.setAttribute('carta3', 'cartas/arcano_2.jpg')
        } else if (carta3 = 3) {
            img3.setAttribute('carta3', 'cartas/arcano_3.jpg')
        } else if (carta3 = 4) {
            img3.setAttribute('carta3', 'cartas/arcano_4.jpg')
        } else if (carta3 = 5) {
            img3.setAttribute('carta3', 'cartas/arcano_5.jpg')
        } else if (carta3 = 6) {
            img3.setAttribute('carta3', 'cartas/arcano_6.jpg')
        } else if (carta3 = 7) {
            img3.setAttribute('carta3', '.cartas/arcano_7.jpg')
        } else if (carta3 = 8) {
            img3.setAttribute('carta3', 'cartas/arcano_8.jpg')
        } else if (carta3 = 9) {
            img3.setAttribute('carta3', 'cartas/arcano_9.jpg')
        } else if (carta3 = 10) {
            img3.setAttribute('carta3', 'cartas/arcano_10.jpg')
        } else if (carta3 = 11) {
            img3.setAttribute('carta3', 'cartas/arcano_11.jpg')
        } else if (carta3 = 12) {
            img3.setAttribute('carta3', 'cartas/arcano_12.jpg')
        } else if (carta3 = 13) {
            img3.setAttribute('carta3', 'cartas/arcano_13.jpg')
        } else if (carta3 = 14) {
            img3.setAttribute('carta3', '.cartas/arcano_14.jpg')
        } else if (carta3 = 15) {
            img3.setAttribute('carta3', 'cartas/arcano_15.jpg')
        } else if (carta3 = 16) {
            img3.setAttribute('carta3', 'cartas/arcano_16.jpg')
        } else if (carta3 = 17) {
            img3.setAttribute('carta3', 'cartas/arcano_17.jpg')
        } else if (carta3 = 18) {
            img3.setAttribute('carta3', 'cartas/arcano_18.jpg')
        } else if (carta3 = 19) {
            img3.setAttribute('carta3', 'cartas/arcano_19.jpg')
        } else if (carta3 = 20) {
            img3.setAttribute('carta3', 'cartas/arcano_20.jpg')
        } else {
            img3.setAttribute('carta3', 'cartas/arcano_21.jpg')
        }
    
    }
    res.appendChild(img1)
    res.appendChild(img2)
    res.appendChild(img3)
    /*document.getElementById('res').appendChild(img1)
    document.getElementById('res').appendChild(img2)
    document.getElementById('res').appendChild(img3)*/
}