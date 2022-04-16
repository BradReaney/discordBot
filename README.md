# Discord bot for Obi WAN 2: Ubuntu Boogaloo server

## Setup

### Prerequasits for running locally

1. Node JS 16 >
2. .env file with the follwoing variables
    - DISCORD_TOKEN=""
    - CLIENT_ID=""
    - GUILD_ID=""

Install dependencies - `npm install`
Run bot - `npm start`

### Prerequasits for running in a docker container

Build the image - `docker build . -t bwadaz/discordbot`

Run the image - ```docker run -e DISCORD_TOKEN=discordToken \
                -e CLIENT_ID=clientId \
                -e GUILD_ID=guildId \
                -d \
                --name discordbot bwadaz/discordbot```

Update the image - `docker push bwadaz/discordbot:latest`

## TODO

- [x] Create dockerfile
- [ ] Create docker-compose
- [ ] Add 'Add request' command
- [ ] Add 'Complete request' command
- [ ] Add 'See requests' command
- [ ] Intergrate with Radarr?
  - [ ] Add direct to Radarr
  - [ ] Show current missing list
- [ ] Intergrate with Tautulli?
  - [ ] Return user stats
