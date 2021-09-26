'use strict'

let readmoreButton = document.querySelector('.button')
let readmoreModal = document.querySelector('.readmore')
let textchanger = document.querySelector('.readm')




readmoreButton.addEventListener('click',function()
{
 readmoreModal.classList.toggle('hide')

 if( textchanger.textContent!='🔼')
 { textchanger.textContent='🔼'}
 else
 { textchanger.textContent='Read More'}



})

