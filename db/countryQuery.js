var MongoClient = require('mongodb').MongoClient

var fetcher = new CountryFetcher("https://restcountries.eu/rest/v2")

var adder = new CountryAdder()

var CountryQuery = function(){
  this.url = "mongodb://localhost:27017/bucketlist"
}

CountryQuery.prototype = {

  populateDatabase: function(){
    fetcher.fetch(function(){
      MongoClient.connect(this.url,function(error,db){
        if(db){
        var countriesDb = db.collection('countries')

        countriesDb.insert(countries)
        }
      })
    })
  }

}