const fs = require('fs');

function readFile(filename) {
	const fileData = fs.readFileSync(filename, 'utf-8');
	return fileData //this will create an array of all the lines in the CSV file.
}

module.exports = {
	readFile
}




