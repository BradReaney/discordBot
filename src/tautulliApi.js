require('dotenv').config();
const axios = require('axios').default;

const tautulliUrl = `http://${process.env.TAUTULLI_IP}:${process.env.TAUTULLI_PORT}/api/v2?apikey=${process.env.TAUTULLI_API_KEY}&cmd=`;

class Tautulli {
	getTopTenUsers(days) {
		axios.get(`${tautulliUrl}get_plays_by_top_10_users&time_range=${days}`)
			.then((response) => {
				const topUsers = response.data.response.data.categories;
				const list = [];
				topUsers.forEach((user) => {
					list.push(`${topUsers.indexOf(user) + 1}. ${user}/n`);
				});
				return list.toString().replaceAll(',', '');
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

module.exports = new Tautulli();