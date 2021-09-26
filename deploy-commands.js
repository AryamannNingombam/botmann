require('dotenv')
    .config({
        path: __dirname + '/.env'
    })
const ConfigureCompetitionCommands = require('./configuration/Competitions');
const ConfigureNewsCommands = require('./configuration/News')
const ConfigureBotCommands = require('./configuration/Bot');
const {
    REST
} = require('@discordjs/rest');
const {
    Routes
} = require('discord-api-types/v9');


const commands = [
        ConfigureCompetitionCommands(),
        ConfigureNewsCommands(),
        ConfigureBotCommands(),
    ]
    .map(command => command.toJSON());

const rest = new REST({
    version: '9'
}).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_GUILD_ID), {
                body: commands
            },
        );

        console.log('Successfully registered application commands.');
    } catch (error) {
        console.error(error);
    }
})();