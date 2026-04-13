const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { role } = require('../src/helpers/roles');

describe('roles', () => {
	it('returns the plexUsers role id', () => {
		assert.equal(role('plexUsers'), '964488672919572502');
	});
});
