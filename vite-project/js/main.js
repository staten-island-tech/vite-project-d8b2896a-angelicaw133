import '../css/style.css'

import {countries} from './sell'

import'../js/dom'

import {DOMselectors} from "./dom"

// const asia = countries.filter((country) => country.continent === "Asia")
// asia.forEach((country) => console.log(country.name));
// const north_america = countries.filter((country) => country.continent === "North America")
// north_america.forEach((country) => console.log(country.name));
// const south_america = countries.filter((country) => country.continent === "South America")
// south_america.forEach((country) => console.log(country.name));
// const africa = countries.filter((country) => country.continent === "Africa")
// africa.forEach((country) => console.log(country.name));
// const europe = countries.filter((country) => country.continent === "Europe")
// europe.forEach((country) => console.log(country.name));


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

// let buttons = document.querySelectorAll("button")
// buttons.forEach((btn)=> btn.addEventListener ("click", function(){
//   let thing = buttons.textContent;
//   let newarr = countries.filter((country) => country.continent === thing )
//   clear_screen()
//   insert(newarr)
//   }));
let buttons = document.querySelectorAll("button")

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
