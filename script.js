/*
let elemento = document.getElementById('title-header');
elemento.style.color="#0000FF";
elemento.style.backgroundColor="#00FF00";
let elementos = document.getElementsByClassName('card');
// console.log(elementos);
elementos[0].style.backgroundColor="#0F0";
elementos = document.getElementsByTagName('li');
// console.log(elementos);
elementos[1].style.color="#F00";
elemento = document.querySelector('#title-header');
// console.log(elemento);
elemento.style.color="white";
elemento.style.backgroundColor="initial";
elemento = document.querySelector('.list-group-item');
// console.log(elemento);
elemento.style.fontSize='20px';
elementos = document.querySelectorAll('.list-group-item');
console.log(elementos);
*/

const itemsArray = JSON.parse(localStorage.getItem('itemsArray')) || [];

const ls = () => {
    const itemsString = JSON.stringify(itemsArray)
    localStorage.setItem('itemsArray', itemsString)
}

const render = () => {
    const itemsList = document.getElementById('items');
    const checkList = document.getElementById('checkList');

    itemsList.innerHTML = '';
    checkList.innerHTML = '';
    for (let i=0; i<itemsArray.length; i++) {
        itemsList.innerHTML += `<li>${itemsArray[i]}</li>`;
        checkList.innerHTML += `<div>
        <input type="checkbox" name="check1" checked>
        <label>${itemsArray[i]}</label>
        </div>`;
    }

    const elementos = document.querySelectorAll('#items li');
    elementos.forEach((elemento, i) => {
        
        elemento.classList.add('list-group-item');

        elemento.addEventListener('click', () => {

            elemento.parentNode.removeChild(elemento);
            itemsArray.splice(i,1)

            //localstorage
            ls();

            render();
        })
    })
}

window.onload = () => {

    render();

    const form = document.getElementById('inputForm');
    
    form.onsubmit = (e) => {

        e.preventDefault();
        const item = document.getElementById('item');
        const item2 = document.getElementById('item2');
        const item3 = document.getElementById('item3');
        const item4 = document.getElementById('item4');
        const txtItem = item.value;
        const txtItem2 = item2.value;
        const txtItem3 = item3.value;
        const txtItem4 = item4.value;
        item.value = '';
        item2.value = '';
        item3.value = '';
        item4.value = '';
        if (txtItem != '' && txtItem2 != '' && txtItem3 != '' && txtItem4 != ''){
            itemsArray.push(txtItem + ', ' + txtItem2 + ', ' + txtItem3 + ', ' + txtItem4);
        }

        //localstorage
        ls();
        
        render();
    }
}