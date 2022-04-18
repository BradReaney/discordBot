const {
	SlashCommandBuilder,
} = require('@discordjs/builders');
const {
	REST,
} = require('@discordjs/rest');
const {
	Routes,
} = require('discord-api-types/v9');
require('dotenv').config();

const commands = [
	new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with pong!'),
	new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info!'),
	new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info!'),
	new SlashCommandBuilder()
		.setName('request')
		.setDescription('Request a film or TV show')
		.addStringOption(option =>
			option.setName('type')
				.setDescription('Do you want a film or TV show?')
				.setRequired(true)
				.addChoice('Film', 'Film')
				.addChoice('TV', 'TV'))
		.addStringOption(option =>
			option.setName('name')
				.setDescription('Enter the name of the film or TV show')
				.setRequired(true)),
]
	.map(command => command.toJSON());

const rest = new REST({
	version: '9',
}).setToken(process.env.DISCORD_TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {
	body: commands,
})
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);