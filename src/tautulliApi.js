require('dotenv').config();
const axios = require('axios').default;

const tautulliUrl = `http://${process.env.TAUTULLI_IP}:${process.env.TAUTULLI_PORT}/api/v2?apikey=${process.env.TAUTULLI_API_KEY}&cmd=`;
const numOfDays = 30;
let topUsers = [];

function getTopUsers() {
	axios.get(`${tautulliUrl}get_plays_by_top_10_users&time_range=${numOfDays}`, topUsers)
		.then((response) => {
			topUsers = response.data.response.data.categories;
		})
		.catch((error) => {
			console.log(error);
		}).then(() => {
			return topUsers;
		});
}

const test = getTopUsers();
console.log(test);