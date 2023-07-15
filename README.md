# Discord bot for Obi WAN 2: Ubuntu Boogaloo server

## Setup

### Prerequasits for running locally

1. Node JS 16 >
2. .env file with the follwoing variables
    - DISCORD_TOKEN=""
    - CLIENT_ID=""
    - GUILD_ID=""
    - MYSQL_USERNAME=""
    - MYSQL_PASSWORD=""
    - TAUTULLI_IP=""
    - TAUTULLI_PORT=""
    - TAUTULLI_API_KEY=""

Install dependencies - `npm install`

Run bot - `npm start`

### Prerequasits for running in a docker container

Build the image on x64 - `docker build . -t bwadaz/discordbot`
Build & push the image on M1 > x86 - `docker buildx build --platform linux/amd64,linux/arm64 --push -t bwadaz/discordbot .`

Run the image - ```docker run -e DISCORD_TOKEN= \
                -e CLIENT_ID= \
                -e GUILD_ID= \
                -e BRADS_DISCORD_USER_ID= \
                -e PLEX_USERS_ROLE_ID= \
                -d \
                --name discordbot bwadaz/discordbot```

Push the image - `docker push bwadaz/discordbot:latest`

## The Plan

### Version 1

- [x] Intergrate Discord JS
- [x] Create 'Add Request' command
- [x] Manage roles for new users
- [x] Add a help request
- [x] Create embed for help request
- [x] Create dockerfile
- [x] Create docker-compose

### Version 2

- [x] Intergrate with Tautulli?
- [x] Return user stats from the API
- [ ] Add 'Top User' command and parse stats

### Version 3

- [ ] Intergrate with Radarr if possible
- [ ] Intergrate with Sonarr if possible
- [ ] Upgrade 'Add Request' command to call Radarr/Sonarr

### Other

- mysql connection modual added for future use if needed
