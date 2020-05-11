const PopulationCounter = require('../PopulationCounter.js')
const fs = require('fs')

describe('Population Counter', () => {
	it('should calculate the world population', () => {
		
		const filename = 'data/worldcitiespop.csv'
		//const expectedData = jest.fn(() => {
			/**
			//Read, parse and calculate the population 
			const fileData = fs.readFileSync(filename, 'utf-8');
			let lines = fileData.split('\n')
			let parsedData = [];
			for(var i = 0 ; i < lines.length ; i++) {
				parsedData.push(lines[i].split(','))
			}

			let population = 0;
			for (var i = 1 ; i < parsedLines.length ; i++) {
				tempNum = parsedLines[i][4];
				if(tempNum != "" && !isNaN(tempNum)) {
					population = population + parseInt(tempNum)
				}
			}

			return population;
			**/
			//return 1347982728;
		//});

		expected = 1347982728;

		expect(PopulationCounter.count(filename)).toBe(expected);
	})
});