require('dotenv').config();
const axios = require('axios').default;
const {
	Client,
	Intents,
} = require('discord.js');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS],
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const tautulliUrl = `http://${process.env.TAUTULLI_IP}:${process.env.TAUTULLI_PORT}/api/v2?apikey=${process.env.TAUTULLI_API_KEY}&cmd=`;
	const numOfDays = 30;

	class Tautulli {

		async getTopTenUsers() {
			// Top ten user call
			axios.get(`${tautulliUrl}get_plays_by_top_10_users&time_range=${numOfDays}`)
				.then((response) => {
					interaction.reply('Top ten user are...');
					const topUsers = response.data.response.data.categories;
					topUsers.forEach((user) => {
						// console.log(`${topUsers.indexOf(user) + 1}. ${user}`);
						interaction.reply(`${topUsers.indexOf(user) + 1}. ${user}`);
					});
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}
	module.exports = new Tautulli();
});