/* eslint-disable brace-style */
/* eslint-disable indent */
const { Client, Intents } = require('discord.js');
const { gifs } = require('./helpers/gifs');
const { getDateTime } = require('./helpers/helper');
const { helpRequestEmbedCreator, mediaRequestEmbedCreator } = require('./helpers/embedMessage');
const { role } = require('./helpers/roles');

require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log(`${getDateTime()} - Plex bot ready`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	switch (commandName) {
		// You dead command
		case 'youdead':
			console.log(`${getDateTime()} - Youdead command requested by ${interaction.user.username}`);
			try {
				await interaction.reply(gifs('youDead'));
				console.log(`${getDateTime()} - Youdead command replied too`);
				break;
			} catch (err) {
				await interaction.reply(`Yeaaah, something went wrong\n${gifs('broken')}`);
				console.log(`${getDateTime()} - Error with the 'youdead' command. Error: ${err}`);
				break;
			}
			// Request command
		case 'request':
			console.log(`${getDateTime()} - Request command requested by ${interaction.user.username}`);
			try {
				await interaction.reply({
					content: `Thanks, ${interaction.user.username}. Brad will let you know if he can get that.\nPeace and Love,\n**Plex Bot**`,
					embeds: mediaRequestEmbedCreator(interaction.options.getString('type'), interaction.options.getString('name'), interaction.user.username),
				});
				console.log(`${getDateTime()} - Request command replied too`);
				break;
			} catch (err) {
				await interaction.reply(`Yeaaah, something went wrong\n${gifs('broken')}`);
				console.log(`${getDateTime()} - Error with the 'request' command. Error: ${err}`);
				break;
			}
		// Help command
		case 'help':
			console.log(`${getDateTime()} - Help command requested by ${interaction.user.username}`);
			try {
				await interaction.reply({
					content: `Thanks, ${interaction.user.username}.\nBrad will let you know when he's take a look.\nPeace and Love,\n**Plex Bot**`,
					embeds: helpRequestEmbedCreator(interaction.user.username, interaction.options.getString('description')),
				});
				console.log(`${getDateTime()} - Help command replied too`);
				break;
			} catch (err) {
				await interaction.reply(`Yeaaah, something went wrong\n${gifs('broken')}`);
				console.log(`${getDateTime()} - Error with the 'help' command. Error: ${err}`);
				break;
			}
		// Lets go command
		case 'letsgo':
			console.log(`${getDateTime()} - Letsgo command requested by ${interaction.user.username}`);
			try {
				await interaction.member.roles.add(role('plexUsers'));
				console.log(`${getDateTime()} - Plex users role given to ${interaction.user.username}`);
				await interaction.reply(`Welcome to the server ${interaction.user.username}!\n${gifs('officeParty')}`);
				console.log(`${getDateTime()} - Letsgo command replied too`);
				break;
			} catch (err) {
				await interaction.reply(`Yeaaah, something went wrong\n${gifs('broken')}`);
				console.log(`${getDateTime()} - Error with the 'letsgo' command. Error: ${err}`);
				break;
			}
	}
});

client.login(process.env.DISCORD_TOKEN);