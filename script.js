const h1= document.querySelector('h1')
const input1= document.getElementById("calculo1")
const input2= document.getElementById("calculo2")
const btnCalculo= document.getElementById("btn calcular")
const pResultado= document.getElementById("result")
const resultadForm= document.getElementById("formulario")

btnCalculo.addEventListener('click', btnOnClick)

function btnOnClick(){
    const sumaInputs= Number(input1.value) + Number(input2.value)
    pResultado.innerText= "El resultado es: "+ sumaInputs   
}

// resultadForm.addEventListener('submit', sumaEnFormulario)

//  function sumaEnFormulario({event}){
//      console.log({event}) 
//      event.preventDefault();
//      const sumaInputs= Number(input1.value) + Number(input2.value)
//      pResultado.innerText= "El resultado es: "+ sumaInputs   
// }
