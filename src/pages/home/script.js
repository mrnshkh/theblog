import { Header } from '../../components/header.js' 
import { card } from '../../components/card.js' 
import { render}  from '../../utils/render.js' 
import { data } from '../../utils/db.js' 
import { Footer } from '../../components/footers.js'
Footer()
import AOS from 'aos' 
Header()
AOS.init() 
let blackBtn = document.querySelector(".black") 
let whiteBtn = document.querySelector(".white") 
let container=document.querySelector(".allcards")
render(data, container, card) 
let burger = document.getElementById('burger') 
let nav = document.getElementById('nav') 
let body = document.body 
let thee = localStorage.getItem("theme") 

if (thee) {
  body.className = thee 
} else {
  body.className = "dark" 
}

blackBtn.onclick = () => {
  body.className = "dark" 
  localStorage.setItem("theme", "dark") 
} 

whiteBtn.onclick = () => {
  body.className = "light" 
  localStorage.setItem("theme", "light") 
} 

  burger.addEventListener('click', () => {
    burger.classList.toggle('open') 
    nav.classList.toggle('open') 
    
  }) 
  