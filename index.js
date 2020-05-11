// entry point of the application
const PopulationCounter = require('./PopulationCounter.js')
let counter = PopulationCounter.count('data/worldcitiespop.csv')

console.log(counter)


