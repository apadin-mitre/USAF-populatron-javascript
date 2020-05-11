const parser = require('../CsvParser.js')

describe('The File Reader', () => {
	it('should parse the CSV data given', () => {

		let mockData = "Country,City,AccentCity,Region,Population,Latitude,Longitude\nad,aixas,Aixàs,06,,42.4833333,1.4666667\nad,aixirivali,Aixirivali,06,,42.4666667,1.5"
		
		let data = mockData.split('\n') // data = [lines]
		let expectedData = [];
		for(var i=0 ; i < data.length ; i++) {
			expectedData.push(data[i].split(','));
		}

		console.log(expectedData)
		expect(parser.readLine(mockData)).toMatchObject(expectedData)
  	})
});