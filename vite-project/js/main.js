import '../css/style.css'

import {countries} from './sell'

import'../js/dom'

import {DOMselectors} from "./dom"

const asia = countries.filter((country) => country.continent === "Asia")
asia.forEach((country) => console.log(country.name));

const north_america = countries.filter((country) => country.continent === "North America")
north_america.forEach((country) => console.log(country.name));

const south_america = countries.filter((country) => country.continent === "South America")
south_america.forEach((country) => console.log(country.name));

const africa = countries.filter((country) => country.continent === "Africa")
africa.forEach((country) => console.log(country.name));

const europe = countries.filter((country) => country.continent === "Europe")
europe.forEach((country) => console.log(country.name));

function insert(){
    countries.forEach((object) => {const card_thing = 
    `<div class = "container"><div class="card">
    <h1>${object.name}</h1>
    <img src="${object.image}" alt="">
    <h2>${object.price}</h2>
  </div>
  </div>`

  DOMselectors.container.insertAdjacentHTML(
    "afterend",
    card_thing
  )})};
insert();

document.btn_eu.addEventListener("click", function (event) {
    event.preventDefault();
    clear_screen();
    console.log("clicked!");
  });

function clear_screen(){
    const element = document.querySelector(".container");
    element.remove();
};