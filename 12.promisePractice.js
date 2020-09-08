const fetch = require("node-fetch");
const API_KEY = '151323434315709928333x8661'
/// 1 task
async function getCitiesData(cities = ['Minsk', 'Madrid', 'Rome']) {
  const citiesData = await Promise.all(
    cities.map(city => fetch(`http://geocode.xyz/${city}?json=1&auth=${API_KEY}`)
      .then(response => response.json()).then(cityData => `${city}-${cityData.standard.countryname}`)
      .catch(err => console.log(err.message))
    ) 
  ) 
  console.log(citiesData)
  return citiesData
}
//console.log(getCitiesData())

//// 2 task

const promiseNice = fetch(`http://geocode.xyz/Nice?json=1&auth=${API_KEY}`)
const promiseParis = fetch(`http://geocode.xyz/Paris?json=1&auth=${API_KEY}`)
Promise.race([promiseNice, promiseParis])
  .then(response => response.json())
  .then(city => console.log(city.standard.countryname)).catch(err => console.log(err.message))

//3 task

function resolveCities(cities){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cities)
      console.log(cities)
    },3000)
  })
}
resolveCities(['Minsk','Rome']).then(cities => cities.map(city => {
  fetch(`http://geocode.xyz/${city}?json=1&auth=${API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(`${city}-${data.standard.countryname}`))
    .catch(err => console.log(err.message))
}))
