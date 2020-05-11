const index = require('../index.js')

describe('The populatron', () => {
	it('should print the world population', () => {
		let expectValue = "Population is: " + 1347982728;
		let filename = "data/worldcitiespop.csv";

		expect(index.printPopulation(filename)).toBe(expectValue);
	})
});