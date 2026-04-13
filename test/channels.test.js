const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { channel } = require('../src/helpers/channels');

describe('channels', () => {
	it('returns the startHere channel id', () => {
		assert.equal(channel('startHere'), '964487383074619404');
	});
});
