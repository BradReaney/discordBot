const {
	MessageEmbed,
} = require('discord.js');
const {
	gifs,
} = require('./gifHelper');

class EmbedMessageHelper {
	helpRequestEmbedCreator(name, description) {
		const embedBody = new MessageEmbed()
			.setColor('#f5a906')
			.setTitle('Help Request Ticket Raised')
			.addFields({
				name: 'Raised By',
				value: name,
			}, {
				name: 'Problem',
				value: description,
			})
			.setImage(gifs('itsFine'))
			.setTimestamp();
		return [embedBody];
	}

	mediaRequestEmbedCreator(media, itemRequested, name) {
		const embedBody = new MessageEmbed()
			.setColor('#f5a906')
			.setTitle(`New ${media} Requested!`)
			.addFields({
				name: 'Item Requested',
				value: itemRequested,
			}, {
				name: 'Requested By',
				value: name,
			})
			.setTimestamp();
		return [embedBody];
	}
}

module.exports = new EmbedMessageHelper();