function readLine(lines) {
	lines = lines.split('\n')
	let parsedData = [];
	for(var i = 0 ; i < lines.length ; i++) {
		parsedData.push(lines[i].split(','))
	}
	return parsedData;
}

module.exports = {
	readLine
}