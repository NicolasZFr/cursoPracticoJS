// Variables diseñadas para seleccionar las etiquetas, id o clases

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const pClass = document.querySelector('.pClass');
const pId = document.getElementById('pId');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1, 
    p, 
    pClass, 
    pId, 
    input,
});

// Modificar el texto de una etiqueta solo como texto

h1.innerText = 'Manipulación básica del DOM';

//Para obtener el valor de un atributo

console.log(h1.getAttribute('class'));

h1.setAttribute('class', 'rojo');

h1.classList.add('titulo');
h1.classList.remove('rojo');

const img = document.createElement('img');
img.setAttribute('src', 'https://akamai-webcdn.kgstatic.net/gt/images/open_graph_l.jpg');

pId.replaceWith(img);

img.setAttribute('style', 'height: 30vh');