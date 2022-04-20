const {
	MessageEmbed,
} = require('discord.js');

class EmbedMessageHelper {
	helpRequestEmbedCreator(name, description) {
		const helpEmbedBody = new MessageEmbed()
			.setColor('#f5a906')
			.setTitle('Help Request Ticket Raised')
			.addFields({
				name: 'Raised By',
				value: name,
			}, {
				name: 'Problem',
				value: description,
			})
			.setTimestamp();
		return [helpEmbedBody];
	}

	mediaRequestEmbedCreator(media, itemRequested, name) {
		const helpEmbedBody = new MessageEmbed()
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
		return [helpEmbedBody];
	}
}

module.exports = new EmbedMessageHelper();