import '../css/style.css'

import {countries} from './sell'


const asia = countries.filter((country) => country.continent === "Asia")
console.log(asia);

const north_america = countries.filter((country) => country.continent === "North America")
console.log(north_america);

const south_america = countries.filter((country) => country.continent === "South America")
console.log(south_america);

const africa = countries.filter((country) => country.continent === "Africa")
console.log(africa);

const europe = countries.filter((country) => country.continent === "Europe")
console.log(europe);