function changeFigure() {
    var div = document.getElementById('cuadro');
    div.style.borderRadius = '100%';
}

function changeColor() {
    var divdos = document.getElementsByClassName('div2');
    console.log(divdos);
    for (var i = 1; i<divdos.length; i++) {
        if (i % 2 == 0) {
            divdos[i].style.background = 'grey'
        }
    }
}

function changeBackground() {
    var colores = ["white", "Red", "Blue", "Aqua", "Green", "Purple"];
    var body = document.querySelector("body");
    var random = Math.floor(Math.random() * colores.length);
    body.style="background-color:" + colores[random];
}

function changeText() {
    var text = document.getElementsByClassName('ej4');
    text[0].innerText = 'Naranja Agria';
    text[1].innerText = 'Manzana Podrida';
    text[2].innerText = 'Pera Dulce';
    text[3].innerText = 'Uva Jugosa';
    text[4].innerText = 'Sandia Pesada';
}

function changeOrden() {
    var text2 = document.getElementsByClassName('ej4');
    text2[0].innerText = 'Pera';
    text2[1].innerText = 'Sandia';
    text2[2].innerText = 'Manzana';
    text2[3].innerText = 'Uva';
    text2[4].innerText = 'Naranja';
}

function changeColor2(){
    var colores2 = ["Brown", "Yellow", "Orange", "lightblue", "grey", "black"];
    var color = document.getElementsByClassName('color');
    
    for (var i=0; i<color.length; i++) {
        var random = Math.floor(Math.random() * colores2.length);
        color[i].innerText = colores2[random];
        color[i].style.color= colores2[random];
    }
}