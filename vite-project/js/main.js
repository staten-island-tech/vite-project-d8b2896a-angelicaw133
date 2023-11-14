import '../css/style.css'

import {countries} from './sell'

console.log(countries);

countries.forEach(country => console.log(country.name))

const asia = countries.filter(country = country.continent === "Asia")
console.log(asia);
