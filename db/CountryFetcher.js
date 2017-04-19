var ApiFetcher = function(address){
  this.address = address
  this.countries = []
}

ApiFetcher.prototype = {
  fetch: function(functionWhenFinished){
    var request = new XMLHttpRequest()

    request.open('GET',this.address)

    reuqest.onload = function(){
      if(request.status === 200){
        var countriesJsonString = request.responseText

        this.countries = JSON.parse(countriesJsonString)

        functionWhenFinished(this.countries)
      }
    }.bind(this)
    request.send()

    countries.log(this.countries)
  }
}