require('dotenv')
.config({
    path:__dirname+'/.env'
})
const {
    Client,
    Intents
} = require('discord.js');



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

    if (commandName === 'test') {
        await interaction.reply('Oh yeah op');
    }
});



client.login(process.env.DISCORD_TOKEN);