// entry point of the application
const PopulationCounter = require('./PopulationCounter.js')
let filename = process.argv.slice(2)[0]
let message = "";

function printPopulation(filename) { //not sure what im doing. 
	let counter = PopulationCounter.count(filename)
	return "Population is: " + counter;
}

console.log(printPopulation(filename))

module.exports = {
	printPopulation
}



