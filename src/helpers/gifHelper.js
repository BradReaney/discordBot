/* eslint-disable indent */
class Gifs {
	gifs(gifName) {
		switch (gifName) {
			case 'youDead':
				return 'https://c.tenor.com/7edqB51nYtwAAAAC/get-him-to-the-greek-jonah-hill.gif';
			case 'itsFine':
				return 'https://c.tenor.com/HYBKG4ZNb5AAAAAM/everything-is-fine-itsfine.gif';
		}
	}

}

module.exports = new Gifs();