//countries router
var express = require('express')
var app = express()
var countryRouter = express.Router()
var CountryQuery = require('../db/countryQuery')

var countryQuery = new CountryQuery()
countryQuery.populateDatabase()

// INDEX
countryRouter.get('/', function(req,res){
  countryQuery.all(function(documents){
    res.json(documents)
  })
})

module.exports = countryRouter