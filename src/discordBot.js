/* eslint-disable indent */
require('dotenv').config();
const {
	Client,
	Intents,
	MessageEmbed,
} = require('discord.js');

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

	let helpEmbedMessage = [];

	function helpEmbedCreator(name, description) {
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
		helpEmbedMessage = helpEmbedBody;
	}

	switch (commandName) {
		case 'ping':
			await interaction.reply('Pong!');
			console.log('Ping command sent');
			break;
		case 'server':
			await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
			console.log('Server command sent');
			break;
		case 'user':
			await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
			console.log('User command sent');
			break;
		case 'request':
			await interaction.reply(`Thanks ${interaction.user.username}!\nBrad will let you know if he can get ${interaction.options.getString('name')} when he's had a look.`);
			console.log('Request command sent');
			break;
		case 'help':
			helpEmbedCreator(interaction.user.username, interaction.options.getString('description'));
			await interaction.reply({
				embeds: [helpEmbedMessage],
			});
			console.log('Help command sent');
			break;
	}
});

client.on('guildMemberAdd', guildMember => {
	const userRole = guildMember.guild.roles.cache.find(role => role.name === 'Plex Users');
	if (guildMember.user.bot === 0 | !guildMember.user.id === '689407148484067378') {
		guildMember.roles.add(userRole);
	}
});

const bradsDiscordUserId = process.env.BRADS_DISCORD_USER_ID;
const plexUsersRoleId = process.env.PLEX_USERS_ROLE_ID;

client.on('guildMemberAdd', (member) => {
	if (member.id !== bradsDiscordUserId | member.user.bot !== 0) {
		member.roles.add(plexUsersRoleId);
	}
});

client.login(process.env.DISCORD_TOKEN);