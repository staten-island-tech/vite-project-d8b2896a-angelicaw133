import '../css/style.css'

import {countries} from './sell'

import'../js/dom'


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

function insert(DOMselectors, countries){
    countries.forEach((object) => {const card_thing = 
    })
}
