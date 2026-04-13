const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { gifs } = require('../src/helpers/gifs');

describe('gifs', () => {
	const cases = ['youDead', 'itsFine', 'broken', 'officeParty'];

	for (const key of cases) {
		it(`returns an https URL for ${key}`, () => {
			const url = gifs(key);
			assert.match(url, /^https:\/\//);
		});
	}
});
