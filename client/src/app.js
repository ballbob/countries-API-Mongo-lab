var CountryFetcher = require('./models/CountryFetcher.js')

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

  var button = document.querySelector('#submit')
  var dropdown = document.querySelector('#countries-dropdown')

  button.addEventListener('click', function(){
    saveCountry(dropdown.value);
  })
}

var saveCountry = function(countryString){
  var request = new XMLHttpRequest();
  request.open("POST", "http://localhost:3000/countries");
  request.setRequestHeader("Content-Type", "application/json")
  request.onload = function(){
    //addToList(countryString)
    // CALL A FUNCTION TO CREATE A LIST IN THE DOM
    populateList()
  }
  request.send(JSON.stringify({countryString}));
}

var addToList = function(item){
  var listedCountries = document.querySelector('#bucket-list')

  var countryP = document.createElement('p')
  countryP.innerText = item

  listedCountries.appendChild(countryP)
}

var populateList = function(){
  var request = new XMLHttpRequest()

  request.open('GET',"http://localhost:3000/countries")

  request.onload = function(){
    if(request.status === 200){
      var jsonString = request.responseText
      var selectedCountries = JSON.parse(jsonString)

      for (var i=0; i < selectedCountries.length; i++){
        var listCountryP = document.createElement('p')
        listCountryP.innerText = selectedCountries[i].countryString
      }

    }
  }
}


window.onload = app