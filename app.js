let numbers = [2, 3, 4, 5];

console.log(numbers[0]);
console.log(numbers[length - 1]); // traer la ulima posicion
console.log(numbers.length);// da la longitud e la array
console.log(numbers.flat(-2));// traer desde el ultimo al primero

for(let i=0 ; i<numbers.length; i++){
    console.log(numbers[i]);

}

for (let i=numbers.length-1 ; i>=0 ; i--){
    console.log(numbers[i]); 
}



// mutable push
let cervezas = ['corona', 'victoria', 'pacifico'];
cervezas.push('modelo');
cervezas.unshift('heineken');// agrega al principio
cervezas.splice(2, 0, 'tecate'); // agrega en la posicion 2, sin borrar
//eliminar
let b = cervezas.pop();// eliminar el ultimo
let b2 = cervezas.shift();// eliminar el primero
console.log(b);
console.log(b2);

//inmutable concat
let vinos = ['chardonnay', 'merlot', 'carbenet'];
const bebidas = cervezas.concat(vinos);
bebidas.push('moet');// es independiente

showDom("array1",cervezas);
showDom("array2",bebidas);


function showDom(element,arr){
    document.getElementById(element).innerHTML = "";

    for(let i=0 ; i<arr.length ; i++){
        document.getElementById(element).innerHTML +=
    `<div>${arr[i]}</div>`;
    }
}