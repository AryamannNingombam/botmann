const {
    GetNews
} = require("../services/NewsAPI");





const HandleNewsCommand = async (interaction) => {
    const subcommand = interaction.options._subcommand;
    const result = await GetNews(subcommand)
    const array = result.data;
    if (!array || array.length === 0) {
        await interaction.reply('No news to be found!')
    } else {
        let resultString = '';
        array.slice(0, 5).forEach((item, index) => {
            resultString += `${index+1}. ${item.title}  - Author : ${item.author ? item.author : "Unknown"} - Link : ${item.url}\n`;
        })
        await interaction.reply(resultString);
    }
}

module.exports = HandleNewsCommand;