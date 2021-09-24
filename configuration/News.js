const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    NEWS_API_ALL_CATEGORIES
} = require('../services/NewsAPI');


const ConfigureNewsCommands = () => {
    let NewsCommands = new SlashCommandBuilder()
        .setName("news")
        .setDescription("Gives the latest news for different categories")

    NEWS_API_ALL_CATEGORIES.forEach(news => {
        NewsCommands
            .addSubcommand(subcommand => subcommand.setName(news)
                .setDescription(`News for ${news} category`))
    })
    return NewsCommands;
}



module.exports = ConfigureNewsCommands;