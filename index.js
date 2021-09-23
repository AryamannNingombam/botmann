require('dotenv')
    .config({
        path: __dirname + '/.env'
    })
const {
    Client,
    Intents
} = require('discord.js');
const HandleCompetitionsCommand = require('./commands/Competitions');
const HandleNewsCommand = require('./commands/News');
const ConnectDB= require('./services/ConnectDB');



const Start = async () => {
    await ConnectDB();

    const client = new Client({
        intents: [Intents.FLAGS.GUILDS]
    });


    client.once('ready', () => {
        console.log('Ready!');
    });


    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;

        const {
            commandName
        } = interaction;

        if (commandName === 'competitions'){
            HandleCompetitionsCommand(interaction);
        }else if (commandName === 'news'){
            HandleNewsCommand(interaction);
        }
    });



    client.login(process.env.DISCORD_TOKEN);
}

Start()