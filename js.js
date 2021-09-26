'use strict'

let mobilebutton = document.getElementById('mobilemenu')
let overlay = document.querySelector(".overlay")
let buttons = document.querySelector(".hbutton")
let modal = document.querySelector(".modal")
document.querySelector("video").playbackRate=0.6

mobilebutton.addEventListener('click' , function(){
 overlay.classList.toggle('hide')
 if(overlay.classList.contains('hide'))
 {
  modal.style = 'display : none'
 }
 else{ modal.style = 'display : block'}

})