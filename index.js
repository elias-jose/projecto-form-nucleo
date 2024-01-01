/*
Funcao para tornar mais facil a captura dos elementos
Usando esta funcao é possivel capturar os elementos pela sua classe
*/
const by = (selector) => document.querySelector(selector)
//Capturando os elementos necessarios.
const form = by('.form')
const btnShow = by('.show')
const reset = by('.reset')

//Adicionar eventos quando os botões forem clicados para alternar entre as telas.
btnShow.addEventListener('click', function () {
   this.parentElement.classList.remove('show')
   this.parentElement.classList.add('hide')
   form.classList.remove('hide')
   form.classList.add('show')
})

reset.addEventListener('click', function () {
   btnShow.parentElement.classList.remove('hide')
   btnShow.parentElement.classList.add('show')
   form.classList.remove('show')
   form.classList.add('hide')
})

//console.log(btnShow.parentElement.classList)