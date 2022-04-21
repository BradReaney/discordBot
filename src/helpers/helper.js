class Helper {

	getDateTime() {
		let now = '';
		now = new Date().toISOString().slice(0, 19).replace('T', ' ');
		return now;
	}

}

module.exports = new Helper();