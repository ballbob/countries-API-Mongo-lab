var MongoClient = require('mongodb').MongoClient

var CountryFetcher = require('./CountryFetcher')

var CountryQuery = function(){
  this.url = "mongodb://localhost:27017/bucketlist"
  this.fetcher = new CountryFetcher("https://restcountries.eu/rest/v2")

}

CountryQuery.prototype = {

  populateDatabase: function(){
    this.fetcher.fetch(function(){
      MongoClient.connect(this.url,function(error,db){
        if(db){
        var countriesDb = db.collection('countries')

        countriesDb.insert(countries)
        }
      })
    })
  }

}

module.exports = CountryQuery