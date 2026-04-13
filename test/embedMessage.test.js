const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const {
	helpRequestEmbedCreator,
	mediaRequestEmbedCreator,
} = require('../src/helpers/embedMessage');

describe('embedMessage', () => {
	it('helpRequestEmbedCreator builds a help ticket embed', () => {
		const [embed] = helpRequestEmbedCreator('Alice', 'Cannot connect');
		const data = embed.toJSON();
		assert.equal(data.title, 'Help Request Ticket Raised');
		assert.equal(data.color, 0xf5a906);
		assert.ok(data.fields);
		assert.equal(data.fields.length, 2);
		assert.equal(data.fields[0].name, 'Raised By');
		assert.equal(data.fields[0].value, 'Alice');
		assert.equal(data.fields[1].name, 'Problem');
		assert.equal(data.fields[1].value, 'Cannot connect');
		assert.ok(data.image && data.image.url);
		assert.match(data.image.url, /^https:\/\//);
		assert.ok(data.timestamp);
	});

	it('mediaRequestEmbedCreator builds a media request embed', () => {
		const [embed] = mediaRequestEmbedCreator('film', 'The Matrix', 'Bob');
		const data = embed.toJSON();
		assert.equal(data.title, 'New film Requested!');
		assert.equal(data.color, 0xf5a906);
		assert.equal(data.fields.length, 2);
		assert.equal(data.fields[0].name, 'Item Requested');
		assert.equal(data.fields[0].value, 'The Matrix');
		assert.equal(data.fields[1].name, 'Requested By');
		assert.equal(data.fields[1].value, 'Bob');
		assert.ok(data.timestamp);
	});
});
