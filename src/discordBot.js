/* eslint-disable indent */
require('dotenv').config();
const {
	Client,
	Intents,
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

	switch (commandName) {
		case 'ping':
			await interaction.reply('Pong!');
			break;
		case 'server':
			await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
			break;
		case 'user':
			await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
			break;
		case 'request':
			await interaction.reply(`Thanks ${interaction.user.username}!\n Brad will let you know if he can get ${interaction.options.getString('name')} when he's had a look.`);
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