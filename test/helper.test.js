const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { getDateTime } = require('../src/helpers/helper');

describe('helper', () => {
	it('getDateTime returns YYYY-MM-DD HH:mm:ss', () => {
		const s = getDateTime();
		assert.match(s, /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
	});
});
