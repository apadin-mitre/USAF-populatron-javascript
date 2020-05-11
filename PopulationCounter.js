const reader = require('./FileReader.js')
const parser = require('./CsvParser.js')

function count(filename) {
	let lines = reader.readFile(filename)
	let parsedLines = parser.readLine(lines)

	let population = 0;
	for (var i = 1 ; i < parsedLines.length ; i++) {
		tempNum = parsedLines[i][4];
		if(tempNum != "" && !isNaN(tempNum)) {
			population = population + parseInt(tempNum)
		}
	}
	console.log(population)
	return parseInt(population);
}

module.exports = {
	count
}