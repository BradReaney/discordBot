/* eslint-disable indent */
require('dotenv').config();
const {
	Client,
	Intents,
} = require('discord.js');
const embedMessageHelper = require('./helpers/embedMessageHelper');
const {
	gifs,
} = require('./helpers/gifHelper');
const {
	getDateTime,
} = require('./helpers/helper');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS],
});

client.once('ready', () => {
	console.log('Client ready');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const {
		commandName,
	} = interaction;

	switch (commandName) {
		case 'youdead':
			console.log(`${getDateTime()} - Youdead command requested by ${interaction.user.username}`);
			await interaction.reply(gifs('youDead'));
			console.log(`${getDateTime()} - Youdead command replied too`);
			break;
		case 'request':
			console.log(`${getDateTime()} - Request command requested by ${interaction.user.username}`);
			await interaction.reply({
				content: `Thanks, ${interaction.user.username}. Brad will let you know if he can get that.\nPeace and Love,\n**Plex Bot**`,
				embeds: embedMessageHelper.mediaRequestEmbedCreator(interaction.options.getString('type'), interaction.options.getString('name'), interaction.user.username),
			});
			console.log(`${getDateTime()} - Request command replied too`);
			break;
		case 'help':
			console.log(`${getDateTime()} - Help command requested by ${interaction.user.username}`);
			await interaction.reply({
				content: `Thanks, ${interaction.user.username}.\nBrad will let you know when he's take a look.\nPeace and Love,\n**Plex Bot**`,
				embeds: embedMessageHelper.helpRequestEmbedCreator(interaction.user.username, interaction.options.getString('description')),
			});
			console.log(`${getDateTime()} - Help command replied too`);
			break;
	}
});

client.on('guildMemberAdd', (member) => {
	if (!member.id === process.env.BRADS_DISCORD_USER_ID | member.user.bot === 0) {
		member.roles.add(process.env.PLEX_USERS_ROLE_ID);
	}
});

client.login(process.env.DISCORD_TOKEN);