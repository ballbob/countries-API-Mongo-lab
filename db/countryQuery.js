var MongoClient = require('mongodb').MongoClient

var fetcher = new CountryFetcher("https://restcountries.eu/rest/v2")

var adder = new CountryAdder()

var CountryQuery = function(){
  this.url = "mongodb://localhost:27017/bucketlist"
}

CountryQuery.prototype = {

  populateDatabase: function(){
    
  }

}