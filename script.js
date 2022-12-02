// Variables diseñadas para seleccionar las etiquetas, id o clases

const h1 = document.querySelector('h1');
const pId = document.getElementById('pId');
const pResultado = document.getElementById('resultado');
const input1 = document.querySelector('#input-ejemplo1');
const input2 = document.querySelector('#input-ejemplo2');
const button = document.querySelector('#btn-calcular');

const img = document.createElement('img');
img.setAttribute('src', 'https://akamai-webcdn.kgstatic.net/gt/images/open_graph_l.jpg');

pId.innerHTML= "";
pId.append(img);

img.setAttribute('style', 'height: 30vh');

function btnCalcular() {
    let valorTotal = Number(input1.value) + Number(input2.value);
    pResultado.innerText = `La suma total de ${input1.value} y ${input2.value} da como resultado ${valorTotal}`;
}