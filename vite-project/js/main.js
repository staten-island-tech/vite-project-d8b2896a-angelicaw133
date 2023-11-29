import '../css/style.css'

import {countries} from './sell'

import'../js/dom'

import {DOMselectors} from "./dom"

function insert(arr){
    arr.forEach((object) => {
    DOMselectors.container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card"><h2>${object.name}</h2>
    <img src="${object.image}" alt="">
    <h3>${object.price}</h3>
    </div>`
  )})};
insert(countries)


function clear_screen(){
    const element = document.querySelector(".container");
    element.innerHTML = ""
};

let buttons = document.querySelectorAll(".btn_eu, .btn_no, .btn_so, .btn_af, .btn_as")

buttons.forEach((btn) => btn.addEventListener("click", function(){
 
  let conti = btn.textContent;
  let newarr = countries.filter((country) => country.continent === conti);
   clear_screen();
  insert(newarr);
}))

DOMselectors.btn_all.addEventListener("click", function() {
  clear_screen();
  insert(countries)
})

document.querySelector(".btn_change").addEventListener("click", function(){
  if(document.body.classList.contains("cool")){
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});