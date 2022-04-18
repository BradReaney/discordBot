require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Client ready');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

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
	case 'sql':
		await interaction.reply('Yeah this don\'t work yet. Thanks for reminding me...');
		break;
	}
});

client.login(process.env.DISCORD_TOKEN);