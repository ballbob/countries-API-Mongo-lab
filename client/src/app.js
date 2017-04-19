var CountryFetcher = require('./models/CountryFetcher.js')
var CountryQuery = require('/../db/countryQuery.js')

function populateSelect(countries){
  console.log(countries)
  for (var i = 0; i < countries.length; i++){
        var dropdown = document.querySelector('#countries-dropdown')

        var countryOption = document.createElement('option')
        countryOption.innerText = countries[i].name

        dropdown.appendChild(countryOption)
      } 
}

var app = function(){
  var fetcher = new CountryFetcher("https://restcountries.eu/rest/v2/all")
  fetcher.fetch(populateSelect);

  var countryQuery = new CountryQuery()

  var button = document.querySelector('#submit')
  var dropdown = document.querySelector('#countries-dropdown')

  button.addEventListener = ('click', function(){

  })
}






window.onload = app