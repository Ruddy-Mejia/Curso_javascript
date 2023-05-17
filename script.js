//clase eventos: event listener
const h1 = document.querySelector('h1')
const formulario = document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pres = document.querySelector('#result')

//solucion 1
// formulario.addEventListener('submit', sumarInputs); 


// function sumarInputs (event) {
//     //console.log({event});
//     event.preventDefault(); //=> esta propiedad evita que se reseteen algunos campos, el ultimo boton del formulario type="submit" por defecto
//     const sum = Number(input1.value)  + Number(input2.value)
//     pres.innerText = 'res: ' + sum
// }


//solucion 2
btn.addEventListener('click', sumarInputs); 


function sumarInputs (event) {
    //console.log({event});
    // event.preventDefault();
    const sum = Number(input1.value)  + Number(input2.value)
    pres.innerText = 'res: ' + sum
}