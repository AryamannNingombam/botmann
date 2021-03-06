require('dotenv')
    .config({
        path: __dirname + '/.env'
    })
const {
    Client,
    Intents
} = require('discord.js');
const {
    SetReminder
} = require('./commands/Reminder');

const HandleCompetitionsCommand = require('./commands/Competitions');
const HandleNewsCommand = require('./commands/News');
const HandleBotCommands = require('./commands/Bot');
const ConnectDB = require('./services/ConnectDB');



const Start = async () => {
    await ConnectDB();

    const client = new Client({
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.DIRECT_MESSAGES
        ],
        partials: ["CHANNEL"]
    });


    client.once('ready', () => {
        console.log('Ready!');
    });


    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;

        const {
            commandName
        } = interaction;

        if (commandName === 'competitions') {
            HandleCompetitionsCommand(interaction);
        } else if (commandName === 'news') {
            HandleNewsCommand(interaction);
        }else if (commandName === 'bot'){
            HandleBotCommands(interaction);
        }
    });

    client.on('messageCreate', async message => {
        if (message.author.bot) return;
         const content  = message.content;
        console.log(content.slice(0,8));
        if (content.toLowerCase().indexOf('reminder')!==-1){
            SetReminder(content, message);
            } else {
                message.reply("fuck you too");
            }

    })



    client.login(process.env.DISCORD_TOKEN);
}

Start()