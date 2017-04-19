var CountryFetcher = function(address){
  this.address = address
}

CountryFetcher.prototype = {
  fetch: function(functionWhenFinished){
    var request = new XMLHttpRequest()

    request.open('GET',this.address)

    request.onload = function(){
      
      if(request.status === 200){
        var countriesJsonString = request.responseText

        var countries = JSON.parse(countriesJsonString)

        functionWhenFinished(countries)
      }
    }.bind(this)

    request.send()
  }
}

module.exports = CountryFetcher