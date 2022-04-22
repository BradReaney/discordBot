/* eslint-disable indent */
class Gifs {
	gifs(gifName) {
		switch (gifName) {
			case 'youDead':
				return 'https://c.tenor.com/7edqB51nYtwAAAAC/get-him-to-the-greek-jonah-hill.gif';
			case 'itsFine':
				return 'https://c.tenor.com/HYBKG4ZNb5AAAAAM/everything-is-fine-itsfine.gif';
			case 'broken':
				return 'https://media1.giphy.com/media/EXHHMS9caoxAA/giphy.gif';
			case 'officeParty':
				return 'https://c.tenor.com/hSThcLBDUfwAAAAC/the-office-lets-party.gif';
		}
	}

}

module.exports = new Gifs();