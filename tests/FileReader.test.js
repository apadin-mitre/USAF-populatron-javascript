const reader = require('../FileReader.js')
const fs = require('fs')

describe('The File Reader', () => {
	it('should read the lines of a given file', () => {
		let filename = 'data/worldcitiespop.csv'
		let file = fs.readFileSync(filename, 'utf-8');

		expect(reader.readFile(filename)).toBe(file)
  	})
});